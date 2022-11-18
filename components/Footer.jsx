import React from 'react';
import { josefin } from '../utils/fonts';

const Footer = () => {
  return (
    <div className="laptop:block laptop:mb-8 mobile:mb-8 mobile:bottom-0">
      <p
        className={`mobile:text-sm laptop:text-lg mt-8 text-gray-500 ${josefin.className}`}
      >
        <a href="http://marvel.com" target="_blank" rel="noreferrer">
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </p>
    </div>
  );
};

export default Footer;
