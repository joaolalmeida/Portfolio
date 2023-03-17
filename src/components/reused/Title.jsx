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
      <motion.div layoutId="title" transition={{ duration: 1 }}>
        João <span>Almeida</span>
      </motion.div>
    </div>
  )
}