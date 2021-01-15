import React from "react";
import Head from "next/head";
import "bulma/css/bulma.css";
import Link from "next/link";
import fa from "fontawesome/css/all.min.css";
import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPostsData }) => {
  return (
    <body>
      <Head>
        <title>Neranjana's Journal</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/public/styles.css" rel="stylesheet" />
      </Head>

      <div className="container xyz">
        <main>
          <div className="has-text-centered author-bio">
            <img src="/avatar.png" className="avatar"></img>

            <p
              className="is-size-3 has-text-centered has-text-weight-bold"
              style={{ paddingBottom: "10px" }}
            >
              Neranjana's Journal 📖
            </p>

            <p className="is-size-5">Hey Dude 👋</p>
            <p>
              I'm{" "}
              <a href="https://neranjana.tk" target="_blank">
                <b>
                  <u>Neranjana</u>
                </b>
              </a>
              , a code newbie, based in Kandy, Sri Lanka.
            </p>
            <p>
              I'm writing about technology and my experience as a journal for
              documentation things that I learned.
            </p>
          </div>
          <div className="post-list">
            <p className="is-size-5">Recent Posts</p>
            <ul>
              {allPostsData.map(({ slug, date, title }) => (
                <li key={slug}>
                  <hr className="style-one" />
                  <b>{date} ─ </b>
                  <Link href={slug}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer className="has-text-centered">
          <p className="is-size-7">
            Written with <span style={{ color: "crimson" }}>♥</span> by{" "}
            <a href="https://neranjana.tk" target="_blank">
              Neranjana
            </a>
            .
            <br />
            Made with Bulma & Next.js
          </p>
        </footer>
      </div>
    </body>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
