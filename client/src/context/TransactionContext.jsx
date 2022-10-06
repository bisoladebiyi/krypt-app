import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "../../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contract_address,
    contract_abi,
    signer
  );

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [transferCount, setTransferCount] = useState(
    localStorage.getItem("transfer_count")
  );
  const [loading, setLoading] = useState(false);

  const isWalletConnected = async () => {
    if (!ethereum) {
      return alert("Please install metamask, cool?");
    }

    const account = await ethereum.request({ method: "eth_accounts" });
    setCurrentAccount(account[0]);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask, cool?");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const makeTransaction = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask, cool?");
      }
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });
      //   add to blockchain
      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setLoading(true);
      await transactionHash.wait();
      setLoading(false);
      alert("Transaction completed successfully!");
      setFormData({
        addressTo: "",
        amount: "",
        keyword: "",
        message: "",
      });

      //   get transaction count
      const transactionCount = await transactionContract.getTransferCount();
      setTransferCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        isConnected: !!currentAccount,
        currentAccount,
        handleChange,
        formData,
        loading,
        makeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
