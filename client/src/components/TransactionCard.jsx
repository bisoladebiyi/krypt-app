import React, { useEffect } from "react";
import { addressShortener } from "../../utils/helpers";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  amount,
  message,
  keyword,
  timeStamp,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="shadow bg-[#282C34] rounded-lg overflow-hidden">
      <div className="p-5 text-sm space-y-2">
        {message && (
          <p className="font-semibold">
            Message: <span className="font-normal">{message}</span>
          </p>
        )}
        <p className="font-semibold">
          From:{" "}
          <span className="font-normal">{addressShortener(addressFrom)}</span>
        </p>
        <p className="font-semibold">
          To: <span className="font-normal">{addressShortener(addressTo)}</span>
        </p>
        <p className="font-semibold">
          Amount: <span className="font-normal">{amount} ETH</span>
        </p>
      </div>
      <img src={gifUrl} alt="gif" className="w-full h-54 object-cover" />
      <p className="text-center p-2 bg-black rounded-xl bg-opacity-60 my-2 mx-10 text-xs text-cyan-300 font-semibold">
        {timeStamp}
      </p>
    </div>
  );
};

export default TransactionCard;
