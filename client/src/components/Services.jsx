import React from "react";

const Services = () => {
  return (
    <div className="md:flex -my-1 px-10 sm:px-20 justify-between py-28 items-center gradient-bg-services space-y-5">
      <p className="capitalize text-gradient text-3xl sm:text-4xl font-medium">
        Services that we
        <br /> continue to improve
      </p>
      <div className="md:w-1/2 space-y-5">
        <div className="white-glassmorphism w-full p-3 sm:p-5 flex justify-between">
          <div className="w-10 h-10 scale-90 sm:scale-100 grid place-items-center bg-[#2952E3] rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              fontSize="21"
              className="text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
              ></path>
            </svg>
          </div>
          <div className="w-10/12">
            <p className="text-lg font-medium">Security Guaranteed</p>
            <p className="mt-3 text-sm">
              Security is guaranteed. We always maintain privacy and keep
              improving the quality of our product
            </p>
          </div>
        </div>
        <div className="white-glassmorphism w-full p-3 sm:p-5 flex justify-between">
          <div className="w-10 h-10 scale-90 sm:scale-100 grid place-items-center bg-[#8945F8] rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              fontSize="21"
              className="text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
            </svg>
          </div>
          <div className="w-10/12">
            <p className="text-lg font-medium">Best Exchange rates</p>
            <p className="mt-3 text-sm">
              Security is guaranteed. We always maintain privacy and keep
              improving the quality of our product
            </p>
          </div>
        </div>
        <div className="white-glassmorphism w-full p-3 sm:p-5 flex justify-between">
          <div className="w-10 h-10 scale-90 sm:scale-100 grid place-items-center bg-[#F8454F] rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              fontSize="21"
              className="text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0H24V24H0z"></path>
                <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"></path>
              </g>
            </svg>
          </div>
          <div className="w-10/12">
            <p className="text-lg font-medium">Faster Transactions</p>
            <p className="mt-3 text-sm">
              Security is guaranteed. We always maintain privacy and keep
              improving the quality of our product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
