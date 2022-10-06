import React from "react";
import Button from "../assets/Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-5">
      <figure className="w-32">
        <img
          src="https://ardent10.github.io/Krypt/assets/logo.60ecbcf0.png"
          alt=""
        />
      </figure>
      <ul className="flex space-x-5 items-center capitalize text-sm">
        {["market", "exchange", "tutorials", "wallets"].map((navItem, i) => (
          <li key={i}>{navItem}</li>
        ))}
        <li className="-mt-2">
            <Button>Login</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
