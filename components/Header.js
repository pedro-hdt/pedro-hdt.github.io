import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>

      <h1 className="title">Pedro Teixeira</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/proj">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <a>CV</a>
            </Link>
          </li>
        </ul>
      </nav >

    </header>
  )
}