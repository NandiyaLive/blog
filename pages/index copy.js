import Head from "next/head";
import "bulma/css/bulma.css";
import Link from "next/link";
import fs from "fs";
import fa from "fontawesome/css/all.min.css";

const Home = ({ slugs }) => {
  return (
    <body>
      <Head>
        <title>BlogSalad 🥗 | Neranjana's Journal</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/public/styles.css" rel="stylesheet" />
      </Head>

      <div className="container xyz">
        <main>
          <div className="has-text-centered author-bio">
            <img src="/avatar.png" className="avatar"></img>

            {/* <h1 className="is-size-2">BlogSalad 🥗</h1> */}

            <p
              className="is-size-3 has-text-centered has-text-weight-bold"
              style={{ paddingBottom: "10px" }}
            >
              BlogSalad 🥗
            </p>

            <p>
              Neranjana's writing from Sri Lanka about technology and experience
              as a journal for documentation things that he learned, meet him
              <a href="https://neranjana.tk" className="lite">
                {" "}
                Here
              </a>
              .
            </p>
            <p className="is-size-5" style={{ letterSpacing: "8px" }}>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-facebook"></i>
            </p>
          </div>
          <div className="post-list">
            <p className="is-size-5">Recent Posts</p>
            <ul>
              {slugs.map((slug) => {
                return (
                  <li>
                    <Link key={slug} href={slug}>
                      <a className="lite">{slug}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>

        <footer className="has-text-centered">
          <p className="is-size-7">
            Written with <span style={{ color: "crimson" }}>♥</span> by
            @NandiyaLive <br />
            Made with Bulma & Next.js
          </p>
        </footer>
      </div>
    </body>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Home;
