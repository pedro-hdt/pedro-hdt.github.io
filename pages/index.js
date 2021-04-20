import Head from "next/head";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Teixeira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container fluid="md" className={styles.container}>
          <Jumbotron className={styles.jumbo}>
            <Row>
              <Col md={8}>
                <h1>Hello World!</h1>
                <h2 className={styles.intro}>
                  My name is Pedro, and I'm an Amateur Baker, Academic Tutor, and aspiring Software Engineer
                </h2>
                <div className={styles.text}>
                  <p>
                    As a final year Computer Science student, at the University of Edinburgh, for my honours project, I'm currently working on approaches for automatic compiler (LLVM) retargeting from an architecture specification.
                  </p>
                  <p>
                    Recently, I've been interested in applied machine learning, compilers, and computer security (protocols and secure coding).
                  </p>
                </div>

              </Col>

              <Col md={4}>
                <Image src="/profile-pic.jpeg" roundedCircle className={styles.profPic} />

                <Button href="https://www.linkedin.com/in/phdteixeira/" className={styles.social} style={{ backgroundColor: "#0077b5" }}>LinkedIn</Button>{' '}
                <Button href="https://www.github.com/pedro-hdt/" className={styles.social} style={{ backgroundColor: "#24292E" }}>GitHub</Button>{' '}
              </Col>

            </Row>

          </Jumbotron>

        </Container>
      </main>
    </>
  );
}
