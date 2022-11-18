import Image from 'next/image';
import React from 'react';
import { josefin } from '../utils/fonts';

const Logo = ({ name }) => {
  return (
    <div className="flex flex-row items-center gap-8 mt-4">
      <a href="http://marvel.com" target="_blank" rel="noreferrer">
        <Image src="/images/marvel.svg" width={130} height={52} alt="Logo" />
      </a>
      <h1
        className={`mobile:hidden uppercase laptop:block laptop:font-bold laptop:text-4xl laptop:mt-2 ${josefin.className}`}
      >
        {name}
      </h1>
    </div>
  );
};

export default Logo;
