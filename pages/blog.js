import React, { useState } from 'react'
import styles from "@/styles/blog.module.css";
import { Inter } from "@next/font/google";
import Link from 'next/link';
import * as fs from 'fs';



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
              {blogitem.metadesc.substr(0, 200)}
            </p>
          </div>
        </div>
      })}

    </div>
  )
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}
export default blog