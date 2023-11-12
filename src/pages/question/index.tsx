import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layouts";
import React, { useState } from "react";
import styles from "./index.module.scss";
import _ from "lodash";
import { NextPage, GetStaticProps } from "next";

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

const Question: NextPage = () => {
  const [, setSelectMap] = useState({});
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.root}>
        <div className={styles.contents}>
          {_.map(questions, (list, type) => {
            return (
              <section key={type}>
                <div>{type}</div>
                {_.map(list, (item, index) => (
                  <div key={`${type}-${index}`} className={styles.question}>
                    <div>{item.text}</div>
                    <div>
                      <label>はい</label>
                      <input
                        type="radio"
                        name={`${type}-${index}`}
                        value="1"
                        checked
                        onChange={(e) => {
                          setSelectMap((prevState) => ({
                            ...prevState,
                            [`${type}-${index}`]: e.target.value,
                          }));
                        }}
                      />
                      <label>いいえ</label>
                      <input
                        type="radio"
                        name={`${type}-${index}`}
                        value="2"
                        onChange={(e) => {
                          setSelectMap((prevState) => ({
                            ...prevState,
                            [`${type}-${index}`]: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
        <div>
          <button
            className={styles["send-button"]}
            onClick={() => {
              alert("送信しました");
            }}
          >
            送信
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Question;
