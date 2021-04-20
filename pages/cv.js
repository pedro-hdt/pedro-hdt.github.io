import Head from "next/head";
import React from 'react';
import styles from "../styles/CV.module.css";

export default function CV() {

  return (
    <>
      <Head>
        <title>Pedro Teixeira | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe class={styles.cv} src="pedrohdt-cv.pdf" />
    </>
  );
}
