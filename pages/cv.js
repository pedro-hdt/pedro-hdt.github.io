import Head from "next/head";
import React, { useEffect } from 'react';

export default function CV() {

  let cvElem = <object data="pedrohdt-cv.pdf" type="application/pdf" width="100%" height="100%" />;

  useEffect(() => {
    // detect mobile device and display CV as button rather than embeddned
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      cvElem = <Button href="pedrohdt-cv.pdf" style={{backgroundColor: "#e4572e"}}>LinkedIn</Button>;
    }
  });

  return (
    <>
      <Head>
        <title>Pedro Teixeira | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cvElem}      
        
    </>
  );
}
