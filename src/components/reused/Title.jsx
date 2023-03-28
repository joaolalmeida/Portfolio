import styles from './Title.module.css'

import { motion } from "framer-motion"

  export function Title(props) {
  return (
    <div
      className={styles.title}
      style={{
        fontSize: props.size,
        fontWeight: props.weight,
        color: props.color,
      }}
    >
      <motion.div
        layoutId="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        João <br /> Almeida
      </motion.div>
    </div>
  )
}

export function Subtitle(props) {
  return (
    <div
      className={styles.subTitle}
      style={{
        fontSize: props.size,
      }}
    >
      <motion.div
        layoutId="subTitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Dev FrontEnd <span>(Jr)</span>
      </motion.div>
    </div>
  )
}