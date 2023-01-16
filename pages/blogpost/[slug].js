import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/Home.module.css";
import blog from "@/styles/blog.module.css"

const slug = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const { slug } = router.query;
  useEffect(() => {
    console.log("useeffect is running");
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
      return a.json();
    }).then((parsed) => {
      console.log(parsed)
      setBlogs(parsed)
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={blog.m1}>
        <h1>{blogs.title}</h1><hr />
        <div>{blogs.content}</div>
      </main>
    </div>
  )
}

export default slug