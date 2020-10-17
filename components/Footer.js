import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>
          v0.2, Made with{" "}
          <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
            Next.js
          </a>,{" "}
          <a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank">
            React-Bootstrap
          </a>, and{" "}
          <a href="https://coolors.co/" rel="noopener noreferrer" target="_blank">
            Coolors
          </a>        
        </p>
      </Container>
    </footer>
  );
}
