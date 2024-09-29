import React from "react";
import styles from "./intro.module.css";

function Intro() {
  return (
    <section className={styles.section1}>
      <i className="ri-account-circle-fill"></i>
      <h3>Sanad Soman</h3>
      <h4>MEAN Stack Developer | Mobile App Developer</h4>
      <article>
        <div className={styles.dottedDiv}>
          <p className={`${styles.textDanger} ${styles.normalText}`}>
            {"if ("} <span className={styles.text}>sad()</span> {"=="}
            <span className={styles.textSuccess}>true</span> {" ) {"}
            <br />
            <span className={styles.textMargin}>
              <span className={styles.text}>sad().</span>
              <span className={styles.textError}>stop();</span>
            </span>
            <br />
            <span
              className={`${styles["text-secondary"]} ${styles["textMargin"]}`}
            >
              beAwesome();{" }"}
            </span>
            <br />
            <span className={styles.textElse}>
              else {"{"} <span className={styles.text}>KeepCoding()</span> {"}"}
            </span>
            <br />
          </p>
          <div className={styles.bottomDiv}>
            <div className="line"></div>
            <span className={styles.textElse}>
              {"{"} <span className={styles.text}>Code</span>
              <span className={styles.textDanger}>
                <sub>It's</sub>
              </span>
              <span className={styles.textError}>fun</span> {"}"}
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Intro;
