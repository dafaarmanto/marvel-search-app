import Link from 'next/link';
import { josefin } from '../utils/fonts';

const CharacterInfo = ({ image, alt, name, id, path }) => {
  return (
    <div className="flex flex-col mobile:w-[110px] laptop:w-[184px] mt-4">
      <img
        className="mobile:w-[120px] mobile:h-[120px] object-cover notched laptop:w-[184px] laptop:h-[374px]"
        src={image}
        alt={alt}
      />
      <Link href={`/characters/${path}`} key={id}>
        <p
          className={`mobile:pr-10 laptop:pr-4 mt-4 cursor-pointer hover:text-red-600 text-sm font-semibold tracking-normal ${josefin.className}`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};

export default CharacterInfo;
