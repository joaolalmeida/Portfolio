
import sol from "../../assets/sol.svg"

import styles from "./Icons.module.css"

import React, { useState } from "react"

import { motion } from 'framer-motion'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa"


export function IconsGitHub() {
 
  return (
    <div className={styles.teste}>
      <motion.div layoutId="social-github" transition={{ duration: 1 }}>
        <a href="https://github.com/joaolalmeida" target="_blank" rel="teste">
          <FaLinkedin size={25} />
        </a>
      </motion.div>
    </div>
  )
};

export function IconsLinkedin() {
  return (
    <div className={styles.teste}>
      <motion.div layoutId="social-linkedin" transition={{ duration: 1 }}>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-almeida-11a854233/"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
      </motion.div>
    </div>
  )
}



export function IconsSun() {
  return (
    <div className={styles.icons}>
      <a href="#">
        <img src={sol} alt="Sol" />
      </a>
    </div>
  )
}
