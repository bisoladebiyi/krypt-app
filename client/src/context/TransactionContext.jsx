import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "../../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => { //get contract
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
    localStorage.getItem("transactionCount")
  );
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const isWalletConnected = async () => { //check if wallet is connected
    if (!ethereum) {
      return alert("Please install metamask, cool?");
    }

    const account = await ethereum.request({ method: "eth_accounts" });
    setCurrentAccount(account[0]);
  };

  const checkIfTransactionsExists = async () => { //check if there are transactions
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransferCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const getAllTransactions = async () => { //get all transactions
    try {
      if (!ethereum) return alert("Please install metamask.");

      const transactionsContract = getEthereumContract();
      const allTransactions = await transactionsContract.getAllTransfers();
      setAllTransactions(
        allTransactions.map((t) => ({
          addressTo: t.receiver,
          addressFrom: t.sender,
          timeStamp: new Date(t.timestamp._hex * 1000).toLocaleString(),
          keyword: t.keyword,
          message: t.message,
          amount: parseInt(t.amount._hex) / 10 ** 18,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => { //connect wallet
    try {
      if (!ethereum) {
        return alert("Please install metamask, cool?");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => { 
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const makeTransaction = async () => { //logic to make transaction
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
      getAllTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
    checkIfTransactionsExists();
    getAllTransactions();
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
        allTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
