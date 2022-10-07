import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
  const { isConnected, allTransactions } = useContext(TransactionContext);

  return (
    <div className="gradient-bg-transactions px-10 sm:px-20 lg:px-32">
      {isConnected ? (
        <h3 className="text-center capitalize text-gradient text-3xl">
          Latest Transactions
        </h3>
      ) : (
        <h3 className="text-center capitalize text-gradient text-3xl">
          Connect account to see latest transactions
        </h3>
      )}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...allTransactions].reverse().map((data, i) => (
          <TransactionCard {...data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
