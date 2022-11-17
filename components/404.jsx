import React from 'react';
import { josefin } from '../utils/fonts';

const NoDataAvailable = () => {
  return (
    <div className="mobile:-ml-4 mobile:h-[100vh] flex flex-col justify-center w-screen laptop:h-[480px]">
      <p
        className={`${josefin.className} mobile:text-sm laptop:text-gray-400 uppercase text-center font-semibold laptop:text-xl`}
      >
        No matches found!
      </p>
    </div>
  );
};

export default NoDataAvailable;
