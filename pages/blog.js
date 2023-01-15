import React, { useEffect, useState } from 'react'
import styles from "@/styles/blog.module.css";
import { Inter } from "@next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((parsed) => {
      console.log(parsed)
      setBlogs(parsed)
    })
  }, [])
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
              {blogitem.content.substr(0,200)}
            </p>
          </div>
        </div>
      })}

    </div>
  )
}

export default blog