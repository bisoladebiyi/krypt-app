import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-5">
      <figure className="w-20 sm:w-32">
        <img
          src="https://ardent10.github.io/Krypt/assets/logo.60ecbcf0.png"
          alt=""
        />
      </figure>
      <ul className="flex space-x-3 sm:space-x-5 items-center capitalize text-xs sm:text-sm">
        {["market", "exchange", "tutorials"].map((navItem, i) => (
          <li key={i}>{navItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
