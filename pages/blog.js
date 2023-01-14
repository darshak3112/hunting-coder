import React from 'react'
import styles from "@/styles/blog.module.css";
import { Inter } from "@next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

const blog = () => {
  return (
    <div className={`${styles.grid} ${styles.main}`}>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            How to learn JavaScript in 2023?
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            <Link href={'/blogpost/hello'}>
              How to learn JavaScript in 2023 11?
              </Link>
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            How to learn JavaScript in 2023?
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            How to learn JavaScript in 2023?
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            How to learn JavaScript in 2023?
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className="blogitems">
          <h2 className={inter.className}>
            How to learn JavaScript in 2023?
          </h2>
          <p className={inter.className}>
            JavaScript is the languague use to desing logic on the web.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default blog