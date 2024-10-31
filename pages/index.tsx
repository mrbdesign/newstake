import Head from 'next/head';
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>LITTLE WORLD Staking</title>
        <meta name="description" content="Stake your LITTLE WORLD PFPs for LITTLE PERKS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>GOOD SMILE is GOOD STYLE</h1>
        <div className={styles.nftBoxGrid}>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push("/stake")}
            style={{ paddingTop: '10px', paddingBottom: '10px', height: 'calc(100% + 10px)' }}
          >
            {/* Staking an NFT */}
            <Image src="/icons/globeski.png" alt="token" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}>LITTLE WORLD Staking</h2>
            <p className={styles.selectBoxDescription}>
              Stake your LITTLE WORLD PFPs for <b>LITTLE PERKS</b>.
              <br />
              <br />
              <i style={{ display: 'block', textAlign: 'center' }}>Lets Friggin Go!</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
