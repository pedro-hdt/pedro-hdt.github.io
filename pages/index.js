import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Col, Image, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Pedro Teixeira | Home</title>
        <link rel="icon" href="/personal-logo32.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Row>
            <h1 className={styles.title}>Welcome to my homepage!</h1>
          </Row>

          <Row>
            <Col md={4}>
              <Image src="/profile-pic.jpeg" alt="profile picture" roundedCircle />
            </Col>
            <Col md={8}>
              <p>I'm a Computer Science student going into my final year at The University of Edinburgh. Recently, I've been exploring JavaScript and React (which is where this website comes from). My favorite courses have been Ditributed Databases and Computer Security. I tend to get interested in all sorts of things, but this year I'm working on compilers and LLVM for my Honours Project. </p>

              <p>I believe in solid habits, teamwork, and open communication. When not coding, I'm most likely running, rock climbing, doing yoga, baking bread, or reading.</p>
            </Col>
          </Row>
        </Container>


      </main>

    </div >
  )
}
