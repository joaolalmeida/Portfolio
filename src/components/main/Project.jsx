import { motion } from 'framer-motion'
// import  landingPage  from "./../../assets/landingpage.png"
import { Pagina } from '../reused/Button'
import { Github } from '../reused/Button'
import linhaHorizontal from './../../assets/linha-horizontal.png'

import styles from './Project.module.css'

export function Project(props) {
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

   const { textos } = props

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
        <h2>{props.texto}</h2>
      </motion.div>
      <motion.div variants={item} className={styles.img}>
        <img src={props.imageSrc} alt="Imagem" />
        <motion.div
          className={styles.technologies}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {textos &&
            textos.map((texto, index) => (
              <span key={index}>
                ✔<p>{texto}</p>
              </span>
            ))}
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
      </motion.div>
      <motion.div
        className={styles.linhaHorizontal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <img src={props.imageLinha} />
      </motion.div>
    </motion.div>
  )
}
