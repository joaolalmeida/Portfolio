import reactjs from "./../../assets/skills/reactjs.svg"
import javascript from "./../../assets/skills/javascript.svg"
import typescript from "./../../assets/skills/typescript.svg"
import html from "./../../assets/skills/html.svg"
import css from './../../assets/skills/css.svg'

import { motion } from 'framer-motion'
import styles from './Hardskills.module.css'

export function Hardskills() {

 const containerteste = {
  hidden : { y: 0, opacity: 0},
   visible: {
     transition: {
       delayChildren: 0.5,
       staggerChildren: 0.2,
     },
   },
 }

 const item = {
   hidden: { y: 80, opacity: 0 },
   visible: {
     transition: {
       delayChildren: 0.5,
       staggerChildren: 0.2,
     },
     y: 0,
     opacity: 1,
   },
 }


  return (
    <motion.div initial="hidden" animate="visible" variants={item}>
      <h2>Hard Skills</h2>

      <motion.div >
        <motion.img src={reactjs}></motion.img>
        <img src={javascript} />
        <img src={typescript} />
        <img src={html} />
        <img src={css} />
      </motion.div>
    </motion.div>
  )
}