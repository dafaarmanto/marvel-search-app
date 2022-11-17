import { useRouter } from 'next/router';

import { inter, josefin } from '../utils/fonts';
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useRef } from 'react';

const DetailHeader = ({ hero }) => {
  const router = useRouter();
  const fac = new FastAverageColor();
  const container = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    router.push('/');
  };

  useEffect(() => {
    fac
      .getColorAsync(
        `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`
      )
      .then((color) => {
        container.current.style.backgroundColor = color.hex;
        container.current.style.color = color.isDark ? '#fff' : '#000';
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div
      ref={container}
      className={`mobile:w-screen laptop:w-full laptop:h-[450px] opacity-95`}
    >
      <p
        onClick={handleClick}
        className={`hover:cursor-pointer mobile:mx-6 laptop:mx-24 pt-12 w-24 font-semibold text-xl hover:text-gray-600 ${josefin.className}`}
      >
        ← Back
      </p>
      <div className="flex laptop:flex-row mobile:flex-col mobile:items-start mobile:mt-4 mobile:gap-6 laptop:gap-12 mobile:mx-6 laptop:mx-24 mobile:pt-6 laptop:pt-16 laptop:items-center">
        <img
          className="object-cover notched mobile:w-[120px] mobile:h-[120px] laptop:w-[240px] laptop:h-[240px]"
          src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
        <div className="flex flex-col mobile:pb-12 mobile:gap-2 laptop:gap-4">
          <p className={`mobile:text-sm font-bold ${josefin.className}`}>
            CHARACTERS
          </p>
          <h1
            className={`mobile:text-4xl laptop:text-6xl font-bold items-center mt-2  ${josefin.className}`}
          >
            {hero.name}
          </h1>
          <p
            className={`mobile:text-sm mt-2 text-justify tracking-normal ${inter.className}`}
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
