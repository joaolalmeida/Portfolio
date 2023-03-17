import styles from './Skills.module.css'


import linhaHorizontal from './../../assets/linha-horizontal.svg'

import { motion } from 'framer-motion'

import { HeaderComplete } from '../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'
import { SoftSkills } from './../../components/main/Softskills'
import { Hardskills } from './../../components/main/Hardskills'

export function Skills() {

  return (
    <div>
      <HeaderComplete />
      <div className={styles.skills}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
        </motion.div>
          <Hardskills />

        <div className={styles.skillsExtras}>
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
        </div>
        <img src={linhaHorizontal} alt="" />

        <SoftSkills />

        <Footer />
      </div>
    </div>
  )
}