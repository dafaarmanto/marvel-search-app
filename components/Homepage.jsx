import Image from 'next/image';
import React from 'react';
import { josefin } from '../utils/fonts';
import NoDataAvailable from './404';

import CharacterInfo from './CharacterInfo';
import Footer from './Footer';
import Input from './Input';

const IMAGE_EXT = 'portrait_uncanny';

const Homepage = ({ characters, setCharacters }) => {
  let cards;

  if (characters) {
    cards = characters
      .slice(0, 7)
      .map((hero) => (
        <CharacterInfo
          key={hero.id}
          id={hero.id}
          path={hero.id}
          name={hero.name}
          image={`${hero.thumbnail.path}/${IMAGE_EXT}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
      ));
  } else {
    cards = <p>No data available!</p>;
  }

  return (
    <div className="h-screen">
      <div className="laptop:mx-24 mobile:mx-4 h-screen">
        <div className="flex flex-row justify-between items-center mobile:pt-2 laptop:pt-8">
          <div className="flex flex-row items-center gap-8 mt-4">
            <a href="http://marvel.com" target="_blank" rel="noreferrer">
              <Image
                src="/images/marvel.svg"
                width={130}
                height={52}
                alt="Logo"
              />
            </a>
            <h1
              className={`mobile:hidden laptop:block laptop:font-bold laptop:text-4xl laptop:mt-2 ${josefin.className}`}
            >
              CHARACTERS
            </h1>
          </div>
          <Input setter={setCharacters} />
        </div>
        <div className="mobile:grid-cols-3 mobile:grid laptop:flex laptop:flex-row mt-6 laptop:gap-x-0">
          {characters.length > 0 ? cards : <NoDataAvailable />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
