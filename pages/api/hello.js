// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from 'md5';

let ts = Date.now().toString();
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;
const notHash = ts + privateKey + publicKey;

const hash = md5(notHash);

export const getData = async (name) => {
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results?.data?.results;
};

export const getDataByID = async (id) => {
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results.data.results;
};

export const getComics = async (id) => {
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results.data.results;
};
