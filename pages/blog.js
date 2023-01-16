import React, { useState } from 'react'
import styles from "@/styles/blog.module.css";
import { Inter } from "@next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className={`${styles.grid} ${styles.main}`}>
      {blogs.map((blogitem) => {
        return <div className={styles.card} key={blogitem.slug}>
          <div className="blogitems">
            <h2 className={inter.className}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                {blogitem.title}
              </Link>
            </h2>
            <p className={inter.className}>
              {blogitem.content.substr(0, 200)}
            </p>
          </div>
        </div>
      })}

    </div>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs');
  let allBlogs = await data.json();
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}
export default blog