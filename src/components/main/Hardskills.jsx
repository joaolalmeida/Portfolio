import { FaReact } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"

import { motion } from "framer-motion"

import styles from './Hardskills.module.css'

export function Hardskills() {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className={styles.hardskills}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2>Hard Skills</h2>

      <ul>
        <motion.div variants={item}>
          <li>
            <FaReact />
            <h3>React JS</h3>
          </li>
        </motion.div>
        <motion.div variants={item}>
          <li>
            <SiJavascript />
            <h3>JavaScript</h3>
          </li>
        </motion.div>
        <motion.div variants={item}>
          <li>
            <SiTypescript />
            <h3>TypeScript</h3>
          </li>
        </motion.div>
        <motion.div variants={item}>
          <li>
            <FaHtml5 />
            <h3>HTML</h3>
          </li>
        </motion.div>
        <motion.div variants={item}>
          <li>
            <FaCss3Alt />
            <h3>CSS</h3>
          </li>
        </motion.div>
      </ul>

      <motion.div
        className={styles.skillsExtras}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>
          <span>○</span> Git
        </p>
        <p>
          <span>○</span> GitHub
        </p>
        <p>
          <span>○</span> Figma
        </p>
        <p>
          <span>○</span> Sass
        </p>
        <p>
          <span>○</span> Bootstrap
        </p>
        <p>
          <span>○</span> PostgreSQL
        </p>
      </motion.div>
    </motion.div>
  )
}

    // <motion.div initial="hidden" animate="visible" variants={containerteste}>
    //   <h2>Hard Skills</h2>
    //   <motion.div>
    //     <FaReact/>
    //     // <motion.img variants={item} src={reactjs}></motion.img>
    //   </motion.div>
    // </motion.div>