import { motion } from 'framer-motion'
import  landingPage  from "./../../assets/landingpage.png"
import { Pagina } from '../reused/Button'
import { Github } from '../reused/Button'
import linhaHorizontal from './../../assets/linha-horizontal.svg'

import styles from './Project.module.css'

export function Project() {
   const container = {
     visible: {
       transition: {
         delayChildren: 0.5,
         staggerChildren: 0.3,
       },
     },
   }

   const item = {
     hidden: { y: 40, opacity: 0 },
     visible: {
       y: 0,
       opacity: 1,
     },
   }
  return (
    <motion.div
      className={styles.project}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div
      className={styles.imgProject}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Landing Page Responsive</h2>
      </motion.div>
      <motion.div variants={item}>
        <img src={landingPage} alt="ola" />
        <motion.div
          className={styles.technologies}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            <span>✓</span> HTML
          </p>
          <p>
            <span>✓</span> CSS
          </p>
          <p>
            <span>✓</span> JavaScript
          </p>
        </motion.div>
        <motion.div
          className={styles.links}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Pagina />
          <Github />

        </motion.div>
        <motion.img
           className={styles.linha}
          src={linhaHorizontal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        />
      </motion.div>
    </motion.div>
  )
}
