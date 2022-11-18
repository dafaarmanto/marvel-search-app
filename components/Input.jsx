import { useRef } from 'react';
import { getData } from '../pages/api/hello';
import { josefin } from '../utils/fonts';

const Input = ({ setter, setEachInput }) => {
  let input = useRef('');

  const handleInput = async (e) => {
    const value = input.current.value;

    let characters = await getData(value);

    if (value.length === 0) {
      characters = [];
    }

    setter(characters);
    setEachInput(value);
  };

  return (
    <div className="mt-4">
      <input
        ref={input}
        placeholder="Search"
        className={`mobile:w-[180px] laptop:w-[240px] uppercase border border-t-0 border-r-0 border-l-0 border-b-black py-2 pr-8 pl-2 ${josefin.className}`}
        onInput={handleInput}
      />
    </div>
  );
};

export default Input;
