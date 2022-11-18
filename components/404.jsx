import React from 'react';
import { josefin } from '../utils/fonts';

const NoDataAvailable = () => {
  return (
    <div className="mobile:-ml-4 flex flex-col justify-center w-screen laptop:h-[480px]">
      <div className="flex flex-col justify-center mobile:h-[78vh]">
        <p
          className={`${josefin.className} mobile:text-sm laptop:text-gray-500 uppercase text-center font-semibold laptop:text-xl`}
        >
          No matches found!
        </p>
      </div>
    </div>
  );
};

export default NoDataAvailable;
