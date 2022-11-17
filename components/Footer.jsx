import React from 'react';
import { josefin } from '../utils/fonts';

const Footer = () => {
  return (
    <div className="laptop:block laptop:mx-24 laptop:mb-8 mobile:mx-4 mobile:mb-8 ">
      <p className={`mobile:text-sm mt-8 text-gray-400 ${josefin.className}`}>
        <a href="http://marvel.com" target="_blank" rel="noreferrer">
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </p>
    </div>
  );
};

export default Footer;
