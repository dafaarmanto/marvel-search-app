import React from 'react';
import { inter, josefin } from '../utils/fonts';

const DetailComicsList = ({ comics }) => {
  return (
    <div className="mobile:mx-6 laptop:mx-24 my-12">
      <p
        className={`pb-2 w-44 text-black font-bold text-2xl border-2 border-t-0 border-l-0 border-r-0 border-b-black uppercase ${josefin.className}`}
      >
        Comics
      </p>
      <div className="mobile:grid mobile:grid-cols-3 mobile:gap-2 mobile:gap-y-8 laptop:flex laptop:flex-row laptop:gap-4 my-8">
        {comics.slice(0, 6).map((comic) => (
          <div className="flex flex-col" key={comic.id}>
            <img
              className="object-cover notched mobile:w-[120px] mobile:h-[120px] laptop:w-[1024px] laptop:h-[304px]"
              src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <p
              className={`break-words hover:text-red-600 pr-4 mobile:text-sm laptop:text-md font-semibold mt-4 ${josefin.className}`}
            >
              <a href={comic.urls[0].url} rel="noreferrer" target="_blank">
                {comic.title}
              </a>
            </p>
            <p className={`mt-2 text-gray-600 text-sm ${inter.className}`}>
              <a
                href={comic.creators.items[0].resourceURI}
                rel="noreferrer"
                target="_blank"
              >
                {comic.creators.items[0].name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailComicsList;
