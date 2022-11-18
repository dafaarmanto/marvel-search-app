import React, { useState } from 'react';
import NoDataAvailable from './404';

import CharacterInfo from './CharacterInfo';
import Footer from './Footer';
import Input from './Input';
import Logo from './Logo';

const IMAGE_EXT = 'portrait_uncanny';

const Homepage = ({ characters, setCharacters }) => {
  const [eachInput, setEachInput] = useState('');

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
          <Logo name={eachInput} />
          <Input setter={setCharacters} setEachInput={setEachInput} />
        </div>
        <div className="mobile:grid-cols-3 mobile:h-[80vh] mobile:grid mobile:gap-4 mobile:gap-y-2 laptop:h-[68vh] laptop:flex laptop:flex-row mt-6 laptop:gap-x-0">
          {characters.length > 0 ? cards : <NoDataAvailable />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
