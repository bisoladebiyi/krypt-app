import React, { useContext } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaEthereum } from "react-icons/fa";
import Button from "../assets/Button";
import { TransactionContext } from "../context/TransactionContext";
import { TailSpin } from "react-loader-spinner";
import { addressShortener } from "../../utils/helpers";

const Welcome = () => {
  const {
    connectWallet,
    isConnected,
    formData,
    handleChange,
    loading,
    makeTransaction,
    currentAccount,
  } = useContext(TransactionContext);

  const sendTransaction = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) {
      return alert("Please fill in missing fields");
    }

    makeTransaction();
  };
  return (
    <div className="mt-28 md:flex justify-between space-y-10 md:space-y-0">
      <div className="md:w-[45%]">
        <div>
          <p className="capitalize text-gradient text-3xl sm:text-4xl font-medium">
            send crypto <br />
            across the globe
          </p>
          <p className="mt-5 font-light">
            Explore the crypto world. Buy and sell cryptocurrencies on Krypt.
          </p>
          {!isConnected && (
            <Button className="py-3 mt-7 w-full" onClick={connectWallet}>
              connect wallet
            </Button>
          )}
        </div>
        <div className="grid grid-cols-3 text-xs sm:text-sm font-light mt-14">
          <div className="text-center border border-gray-300 rounded-tl-xl py-4">
            Immutable
          </div>
          <div className="text-center border border-gray-300 py-4 border-x-0">
            Peer-to-peer
          </div>
          <div className="text-center border border-gray-300 rounded-tr-xl py-4">
            Ethereum
          </div>
          <div className="text-center border border-gray-300 border-t-0 rounded-bl-xl py-4">
            Web 3.0
          </div>
          <div className="text-center border border-gray-300 border-t-0 py-4 border-x-0">
            Zero Fee
          </div>
          <div className="text-center border border-gray-300 border-t-0 rounded-br-xl py-4">
            Blockchain
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col md:w-[45%]">
        <div className="eth-card w-72 rounded h-40 p-3 flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="border-2 rounded-full w-8 h-8 border-white grid place-items-center">
              <FaEthereum className="text-lg" />
            </div>
            <HiOutlineInformationCircle className="text-lg" />
          </div>
          <div>
            <p className="text-xs sm:text-sm">
              {addressShortener(currentAccount) || ""}
            </p>
            <p className="font-medium">Ethereum</p>
          </div>
        </div>
        <div className="w-full rounded-lg p-5 mt-8 blue-glassmorphism">
          <form action="">
            <input
              className="block bg-transparent w-full py-2 text-xs sm:text-sm placeholder:text-gray-500 px-2 outline-none mb-3"
              value={formData.addressTo}
              name="addressTo"
              onChange={handleChange}
              type="text"
              placeholder="Address to"
            />
            <input
              className="block bg-transparent w-full py-2 text-xs sm:text-sm placeholder:text-gray-500 px-2 outline-none mb-3"
              value={formData.amount}
              name="amount"
              onChange={handleChange}
              type="number"
              placeholder="Amount (ETH)"
            />
            <input
              className="block bg-transparent w-full py-2 text-xs sm:text-sm placeholder:text-gray-500 px-2 outline-none mb-3"
              value={formData.keyword}
              name="keyword"
              onChange={handleChange}
              type="text"
              placeholder="Keyword (Gif)"
            />
            <input
              className="block bg-transparent w-full py-2 text-xs sm:text-sm placeholder:text-gray-500 px-2 outline-none mb-3"
              value={formData.message}
              name="message"
              onChange={handleChange}
              type="text"
              placeholder="Anything else?"
            />

            {loading ? (
              <div className="w-full grid place-items-center">
                <TailSpin
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                  color="#2F94E7"
                />
              </div>
            ) : (
              <Button
                onClick={sendTransaction}
                className={"w-full text-xs sm:text-sm"}
                outline
              >
                Send now
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
