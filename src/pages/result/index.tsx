import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layouts";
import styles from "./index.module.scss";
import Link from "next/link";
import _ from "lodash";
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

const questions = {
  L1: [
    { text: "質問1" },
    { text: "質問2" },
    { text: "質問3" },
    { text: "質問4" },
  ],
  L2: [
    { text: "質問5" },
    { text: "質問6" },
    { text: "質問7" },
    { text: "質問8" },
  ],
  L3: [
    { text: "質問9" },
    { text: "質問10" },
    { text: "質問11" },
    { text: "質問12" },
  ],
  L4: [
    { text: "質問13" },
    { text: "質問14" },
    { text: "質問15" },
    { text: "質問16" },
  ],
};

type Props = {
  test: string;
};

const Result: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.root}>
        <div className={styles.contents}>
          {_.map(questions, (list, type) => {
            return (
              <section>
                <div>{type}</div>
                {_.map(list, (item, index) => (
                  <div className={styles.question}>
                    <div>{item.text}</div>
                    <div>
                      <label>はい</label>
                      <input
                        type="radio"
                        name={`${type}-${index}`}
                        value="1"
                        checked
                      />
                      <label>いいえ</label>
                      <input type="radio" name={`${type}-${index}`} value="2" />
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
        <div>
          <button className={styles["send-button"]} onClick={() => {}}>
            送信
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Result;
