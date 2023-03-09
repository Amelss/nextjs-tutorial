import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sweet Bite | Home</title>
        <meta name="keywords" content="sweet bite users" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        aperiam quod! Voluptas similique alias incidunt dolores laboriosam ad
        optio nesciunt blanditiis totam nemo atque voluptatibus, impedit autem
        est omnis, numquam labore accusantium fuga consequatur quis debitis
        possimus asperiores quo? Cupiditate voluptates sapiente similique a
        excepturi reprehenderit minima reiciendis. Deserunt, modi.
      </p>

      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero
        dolor voluptatibus, tempora corporis officia ipsum praesentium nesciunt
        quibusdam necessitatibus maxime animi reprehenderit quasi laudantium
        fuga quidem voluptatum, est fugiat quaerat odio laborum facere nobis
        laboriosam quam. Atque, id aliquam.
      </p>

      <Link href={"/users"}> <button className={styles.btn}>View All Users</button></Link>
    </>
  );
}
