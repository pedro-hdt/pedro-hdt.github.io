import Head from "next/head";

export default function CV() {
  return (
    <>
      <Head>
        <title>Pedro Teixeira | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <embed src="pedrohdt-cv.pdf" type="application/pdf" width="100%" height="100%" />
        
    </>
  );
}