import styles from "../styles/Header.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar expand="md">

          <Navbar.Brand href="/" className={styles.name}>
            Pedro Teixeira
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.nav} defaultActiveKey="/">
              <Link href="/"><Nav.Link href="/" eventKey="link-1">Home</Nav.Link></Link>
              <Link href="/cv"><Nav.Link href="/cv" eventKey="link-2">CV</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </Container>
    </header>
  );
}
