import React from "react";

const Footer = () => {
  return (
    <div className="px-10 -mt-1 sm:px-20 lg:px-32 gradient-bg-footer pt-44 text-sm">
      <div className="md:flex items-center justify-between pt-5 space-y-3 md:space-y-0">
        <figure className="w-32">
          <img
            src="https://github.com/adrianhajdin/project_web3.0/blob/main/client/images/logo.png?raw=true"
            alt=""
          />
        </figure>
        <ul className="flex justify-between items-center capitalize text-xs sm:text-sm md:text-base md:w-1/2 font-semibold">
          {["market", "exchange", "tutorials", "wallets"].map((navItem, i) => (
            <p key={i}>{navItem}</p>
          ))}
        </ul>
      </div>
      <p className="text-center mt-10 sm:mt-16 border-b border-white pb-3 text-xs sm:text-sm">
        Code by: Abisola 💙{" "}
      </p>
      <div className="flex justify-center items-center justify-between -mx-5 sm:space-x-20 mt-5 text-[#a099ff] font-medium pb-10 text-xs sm:text-sm">
        <a href="https://github.com/bisoladebiyi" target={"_blank"}>
          Github
        </a>
        <a href="https://www.linkedin.com/in/abisolaadebiyi/" target={"_blank"}>
          LinkedIn
        </a>
        <a href="https://abisola.dev" target={"_blank"}>
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Footer;
