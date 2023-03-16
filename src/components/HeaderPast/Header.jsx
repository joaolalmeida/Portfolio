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
      <div className={styles.icons}>
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
      <Title size="1.2rem" weight="500" color="rgba(0, 136, 255, 0)" />
      <Navbar />
      <div className={styles.icons}>
        <IconsGitHub />
        <IconsLinkedin />
        <IconsSun />
      </div>
    </header>
  )
}

export function HeaderSobre() {
  return (
    <header className={styles.header}>
      <Title size="1.2rem" weight="500" />
      <Navbar />
      <div className={styles.icons}>
        <IconsSun />
      </div>
    </header>
  )
}