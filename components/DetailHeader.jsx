import { useRouter } from 'next/router';
import React from 'react';
import { inter, josefin } from '../utils/fonts';

const DetailHeader = ({ hero }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push('/');
  };

  return (
    <div className="mobile:w-screen laptop:w-full laptop:h-[450px] bg-black opacity-95">
      <p
        onClick={handleClick}
        className={`text-white hover:cursor-pointer mobile:mx-6 laptop:mx-24 pt-12 w-24 font-semibold text-xl hover:text-gray-600 ${josefin.className}`}
      >
        ← Back
      </p>
      <div className="flex flex-row mobile:gap-6 laptop:gap-12 mobile:mx-6 laptop:mx-24 mobile:pt-6 laptop:pt-16 items-center">
        <img
          className="object-cover notched mobile:w-[120px] mobile:h-[120px] laptop:w-[240px] laptop:h-[240px]"
          src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
        <div className="flex flex-col mobile:pb-12 mobile:gap-2 laptop:gap-4">
          <p
            className={`text-gray-600 mobile:text-sm font-bold ${josefin.className}`}
          >
            CHARACTERS
          </p>
          <h1
            className={`mobile:text-4xl laptop:text-6xl font-bold items-center mt-2 text-white ${josefin.className}`}
          >
            {hero.name}
          </h1>
          <p
            className={`text-gray-500 mobile:text-sm mt-2 tracking-normal ${inter.className}`}
          >
            {hero.description === ''
              ? 'This character have no description yet.'
              : hero.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;