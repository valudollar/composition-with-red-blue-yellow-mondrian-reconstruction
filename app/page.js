import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <head>
        <title>Composition With Red, Blue and Yellow</title>
      </head>
      <body>
        <div className={styles.MainContainer}>
          <div className={styles.Canvas}>
            <div className={styles.ColOne}>
              <div className={styles.OneA}></div>
              <div className={styles.OneB}></div>
              <div className={styles.OneC}></div>
              <div className={styles.OneD}></div>
              <div className={styles.OneE}></div>
            </div>
            <div className={styles.ColTwo}></div>
            <div className={styles.ColThree}>
              <div className={styles.ThreeA}></div>
              <div className={styles.ThreeB}></div>
              <div className={styles.ThreeC}>
                <div className={styles.ThreeCOne}></div>
                <div className={styles.ThreeCTwo}></div>
                <div className={styles.ThreeCThree}>
                  <div className={styles.ThreeCThreeA}></div>
                  <div className={styles.ThreeCThreeB}>
                    <div className={styles.ThreeCThreeBOne}></div>
                    <div className={styles.ThreeCThreeBTwo}>
                      <div className={styles.ThreeCThreeBTwoA}></div>
                      <div className={styles.ThreeCThreeBTwoB}></div>
                    </div>
                  </div>
                  <div className={styles.ThreeCThreeC}></div>
                  <div className={styles.ThreeCThreeD}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
