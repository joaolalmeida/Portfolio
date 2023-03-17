
import sol from "../../assets/sol.svg"

import styles from "./Icons.module.css"

import React, { useState } from "react"

import { motion } from 'framer-motion'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"


export function IconsGitHub() {
 
  return (
    <div className={styles.icons}>
      <motion.div
        layoutId="social-github"
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <a href="https://github.com/joaolalmeida" target="_blank">
          <FaGithub size={25} />
        </a>
      </motion.div>
    </div>
  )
};

export function IconsLinkedin() {
  return (
    <div className={styles.icons}>
      <motion.div
        layoutId="social-linkedin"
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-almeida-11a854233/"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
      </motion.div>
    </div>
  )
}



export function IconSun() {
  return (
    <div className={styles.iconSun}>
      <motion.div
        layoutId="social-sun"
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <a href="#" target="_blank">
          <BsSunFill size={25} />
        </a>
      </motion.div>
    </div>
  )
}
