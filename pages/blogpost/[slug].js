import { useRouter } from 'next/router'
import React from 'react'
import styles from "@/styles/Home.module.css";
import blog from "@/styles/blog.module.css"

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={blog.m1}>
        <h1>Title of the page</h1><hr />
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, esse voluptas quia rem accusantium maiores, possimus ipsa vero repudiandae veritatis, voluptatum consequuntur facere.</div>
      </main>
    </div>
  )
}

export default slug