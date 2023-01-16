import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";
import blog from "@/styles/blog.module.css"

const slug = (props) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState(props.myBlog);
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={blog.m1}>
        <h1>{blogs.title}</h1><hr />
        <div>{blogs.content}</div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}

export default slug