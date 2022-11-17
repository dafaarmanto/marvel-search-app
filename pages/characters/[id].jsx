import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDataByID, getComics } from '../api/hello';

import DetailComicsList from '../../components/DetailComicsList';
import DetailHeader from '../../components/DetailHeader';
import Footer from '../../components/Footer';

const DetailPage = ({ title, description }) => {
  const [hero, setHero] = useState();
  const [comics, setComics] = useState([]);

  const router = useRouter();
  let { id } = router.query;

  useEffect(() => {
    getComics(id).then((data) => setComics(data));
    getDataByID(id).then((data) => setHero(data[0]));

    console.log(comics);
  }, []);

  if (!hero) return;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <DetailHeader hero={hero} />
      <DetailComicsList comics={comics} />
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'MARVEL Search | Detail Page',
      description: 'Ultimate site to search your favorite MARVEL characters!',
    },
  };
};

export default DetailPage;
