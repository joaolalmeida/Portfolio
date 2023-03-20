import styles from './Skills.module.css'

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


        <SoftSkills />
        <Footer />
      </div>
    </div>
  )
}