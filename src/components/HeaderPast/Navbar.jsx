import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/sobre">SOBRE</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <a href="/projetos">PROJETOS</a>
        </li>
        <li>
          <a href="#">CONTATO</a>
        </li>
      </ul>
    </div>
  )
}