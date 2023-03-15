import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="./../pages/sobre/Sobre.jpx">SOBRE</a>
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