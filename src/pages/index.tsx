import Head from "next/head";
import Layout, { siteTitle } from "../../components/layouts";
import styles from "./index.module.scss";
import Link from "next/link";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";

// static rendering
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: "test",
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
      <div className={styles.root}>
        <div className={styles.contents}>
          <Link href="/question">
            <button className={styles["start-button"]}>診断を始める</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
