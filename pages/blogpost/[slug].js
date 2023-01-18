import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";
import blog from "@/styles/blog.module.css"
import * as fs from 'fs';

const Slug = (props) => {

  const [blogs, setBlogs] = useState(props.myBlog);


  return (
    <div className={styles.container}>
      <main className={blog.m1}>
        <h1>{blogs.title}</h1><hr />
        <div>{blogs.content}</div>
      </main>
    </div>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-nextjs' } },
    ],
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;


  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

export default Slug