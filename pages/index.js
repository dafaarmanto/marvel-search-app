import Head from 'next/head';
import { useState } from 'react';

import Homepage from '../components/Homepage';

function Home({ title, description }) {
  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Homepage characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'MARVEL Search | Homepage',
      description: 'Ultimate site to search your favorite MARVEL characters!',
    },
  };
};

export default Home;
