import reactjs from "./../../assets/skills/reactjs.svg"
import javascript from "./../../assets/skills/javascript.svg"
import typescript from "./../../assets/skills/typescript.svg"
import html from "./../../assets/skills/html.svg"
import css from './../../assets/skills/css.svg'

import { motion } from 'framer-motion'
import styles from './Hardskills.module.css'

export function Hardskills() {

 const containerteste = {
   visible: {
     transition: {
       delayChildren: 0.5,
       staggerChildren: 1.2,
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
    <motion.div initial="hidden" animate="visible" variants={containerteste}>
      <h2>Hard Skills</h2>

      <motion.div >
        <motion.img variants={item} src={reactjs}></motion.img>
        <motion.img variants={item} src={reactjs}></motion.img>
        <motion.img variants={item} src={reactjs}></motion.img>
        <motion.img variants={item} src={reactjs}></motion.img>
        <motion.img variants={item} src={reactjs}></motion.img>

      </motion.div>
    </motion.div>
  )
}