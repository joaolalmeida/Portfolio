import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

import React, { useState } from "react"

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleCombinedClick = () => {
    handleMenuClick()
    toggleMenu()
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={handleCombinedClick}>
        {isMenuOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
      <ul
        className={`${styles.navbarItems} ${
          showMenu ? styles["navbarItems--mobile"] : ""
        } ${showMenu ? styles["navbarItems--show"] : ""}`}
      >
        <li>
          <Link to="/"><span>INICIO</span></Link>
        </li>
        <li>
          <Link to="/sobre"><span>SOBRE</span></Link>
        </li>
        <li>
          <Link to="/skills"><span>SKILLS</span></Link>
        </li>
        <li>
          <Link to="/projetos"><span>PROJETOS</span></Link>
        </li>
        <li>
          <Link to="/contato"><span>CONTATO</span></Link>
        </li>
      </ul>
    </nav>
  )
}
