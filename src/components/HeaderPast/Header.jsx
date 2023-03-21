import styles from "./Header.module.css"

import { Title } from "../reused/Title"

import { IconSun } from "../reused/Icons"
import { IconsGitHub } from "../reused/Icons"
import { IconsLinkedin } from "../reused/Icons"

import { Navbar } from "./Navbar"


export function HeaderComplete() {
  return (
    <header className={styles.header}>
      <div className={styles.teste}>
        <Title size="1.188rem" />
      </div>
      <Navbar />
      <div className={styles.icons}>
        <IconsLinkedin />
        <IconsGitHub />
        <IconSun />
      </div>
    </header>
  )
}

export function HeaderInicio() {
  return (
    <header className={styles.header}>
      <div className={styles.teste}>
        <Title size="1.2rem" weight="500" color="rgba(0, 136, 255, 0)" />
      </div>
      <Navbar />
      <div className={styles.icons}>
        <IconsLinkedin />
        <IconsGitHub />
        <IconSun />
      </div>
    </header>
  )
}


export function HeaderSobre() {
  return (
    <header className={styles.header}>
      <div className={styles.teste}>
        <Title size="1.2rem" weight="500" />
      </div>
      <Navbar />
      <div className={styles.icons}>
        <IconSun />
      </div>
    </header>
  )
}