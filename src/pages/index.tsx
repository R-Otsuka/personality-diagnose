import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layouts/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

// static rendering
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: 'test',
    },
  };
};

type Props = {
  test: string;
};

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>test</div>
    </Layout>
  );
};

export default Home;
