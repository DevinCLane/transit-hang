import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transit Hang</title>
        <meta name="description" content="Find a place to meet up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Transit Hang
        </h1>

        <p className={styles.description}>
          Where should we meet?
        </p>
 
        <Map />

        

 

      </main>

      <footer className={styles.footer}>
        Made by Devin Lane
      </footer>
    </div>
  )
}
