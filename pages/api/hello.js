// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from 'md5';

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;

const generateHash = (ts) => {
  return md5(ts + privateKey + publicKey);
}

export const getData = async (name) => {
  const timestamp = new Date().getTime();
  const hash = generateHash(timestamp);
  
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&nameStartsWith=${name}&apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results?.data?.results;
};

export const getDataByID = async (id) => {
  const timestamp = new Date().getTime();
  const hash = generateHash(timestamp);
  
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results.data.results;
};

export const getComics = async (id) => {
  const timestamp = new Date().getTime();
  const hash = generateHash(timestamp);
  
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const results = await res.json();

  return results.data.results;
};
