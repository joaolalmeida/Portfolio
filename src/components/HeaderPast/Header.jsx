import styles from "./Header.module.css"

import { Title } from "../reused/Title"

import { IconsSun } from "../reused/Icons"
import { IconsGitHub } from "../reused/Icons"
import { IconsLinkedin } from "../reused/Icons"

import { Navbar } from "./Navbar"

export function HeaderComplete() {
  return (
    <header className={styles.header}>
      <Title size="1.188rem" />
      <Navbar />
      <div className={styles.teste}>
        <IconsGitHub />
        <IconsLinkedin />
        <IconsSun />
      </div>
    </header>
  )
}

export function HeaderInicio() {
  return (
    <header className={styles.header}>
      <div></div>
      <Navbar />
      <div className={styles.teste}>
        <IconsGitHub />
        <IconsLinkedin />
        <IconsSun />
      </div>
    </header>
  )
}
