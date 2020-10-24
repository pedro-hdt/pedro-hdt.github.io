import Head from "next/head";

export default function CV() {

  // detect mobile device and display CV as button rather than embedded
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let cvElem;
  if (isMobile) {
    cvElem = <Button href="pedrohdt-cv.pdf" style={{backgroundColor: "#e4572e"}}>LinkedIn</Button>;
  } else {
    cvElem = <object data="pedrohdt-cv.pdf" type="application/pdf" width="100%" height="100%" />;
  }

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
