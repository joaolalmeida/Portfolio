import styles from "./Header.module.css"

import { Title } from "../reused/Title"

import { IconSun } from "../reused/Icons"
import { IconsGitHub } from "../reused/Icons"
import { IconsLinkedin } from "../reused/Icons"

import { Navbar } from "./Navbar"

import { motion } from 'framer-motion'

export function HeaderComplete() {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.teste}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Title size="1.2rem" weight="500" />
      </motion.div>
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


export function HeaderSobre(props) {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.teste}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Title size="1.2rem" weight="500" color={props.color} />
      </motion.div>
      <Navbar />
      <div className={styles.icons}>
        <IconSun />
      </div>
    </header>
  )
}