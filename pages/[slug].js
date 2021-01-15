import React from "react";
import Head from "next/head";
import Link from "next/link";
import "bulma/css/bulma.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

const Post = ({ postHtml, data }) => {
  return (
    <body>
      <Head>
        <title>{data.title} | Neranjana's Journal 📖 </title>
      </Head>

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" +
            data.image +
            ")",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-body">
          <div className="post-container">
            <p className="is-size-3 has-text-weight-bold">{data.title}</p>
            <p className="is-size-6">
              {data.date} | By <b>{data.author}</b>
            </p>
          </div>
        </div>
      </section>

      <div className="post-container xyz">
        <Link href="/">
          <a>
            <i className="fa fa-angle-left"></i> Go back
          </a>
        </Link>
        <br />
        <br />
        <hr className="style-one" />
        <div className="post-container">
          <div dangerouslySetInnerHTML={{ __html: postHtml }} />
        </div>
      </div>

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
    </body>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const contentWMeta = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedContent = matter(contentWMeta);

  const postHtml = marked(parsedContent.content);

  return {
    props: {
      postHtml,
      data: parsedContent.data,
    },
  };
};

export default Post;
