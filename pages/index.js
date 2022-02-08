import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootswatch/dist/sketchy/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Good Fellas | NFTs</title>
        <meta
          name="description"
          content="The good fellas is a collection of 5555 NFTs. The first collection is The Orchestra."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THE GOOD <span>FELLAS</span>
        </h1>

        <p className={styles.description}>Coming Soon... </p>

        <div className={styles.grid}>
          <a href="https://www.instagram.com/thegoodfellas.io" className="p-2">
            <FontAwesomeIcon icon={faInstagram} style={{ width: "20px" }} />
          </a>
          <a href="https://www.twitter.com/thegoodfellasio" className="p-2">
            <FontAwesomeIcon icon={faTwitter} style={{ width: "20px" }} />
          </a>
        </div>
      </main>
    </div>
  );
}
