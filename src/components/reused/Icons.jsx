import styles from "./Icons.module.css"

import React, { useState } from "react"

import { motion } from 'framer-motion'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"



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
 const [isChanged, setIsChanged] = useState(false)

const handleClick = () => {
  if (isChanged) {
    document.documentElement.style.setProperty("--black-100", "#191522")
    document.documentElement.style.setProperty("--white", "#fff")
    setIsChanged(false)
  } else {
    document.documentElement.style.setProperty("--black-100", "#fff")
    document.documentElement.style.setProperty("--white", "#000")
    setIsChanged(true)
  }
}

const [isMenuOpen, setIsMenuOpen] = useState(false)

const handleMenuClick = () => {
  setIsMenuOpen(!isMenuOpen)
}

const handleCombinedClick = () => {
  handleClick()
  handleMenuClick()
}

  return (
    <div className={styles.iconSun} onClick={handleCombinedClick}>
      <motion.div
        layoutId="social-sun"
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {isMenuOpen ? (
          <BsMoonFill size={25} className={styles.moon} />
        ) : (
          <BsSunFill size={25} />
        )}
      </motion.div>
    </div>
  )
}
