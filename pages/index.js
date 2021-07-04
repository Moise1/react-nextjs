import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Home = () =>{
  return (
    <div className={styles.container}>
      <Head>
        <title>Next &amp; React Crash Course</title>
        <meta name="description" content="Learn about Nextjs, Web dev, Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Welcome to Next/React Home</p>
    </div>
  )
}

export default Home;