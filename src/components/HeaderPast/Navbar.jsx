import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <a href="#">SKILLS</a>
        </li>
        <li>
          <a href="#">PROJETOS</a>
        </li>
        <li>
          <a href="#">CONTATO</a>
        </li>
      </ul>
    </div>
  )
}