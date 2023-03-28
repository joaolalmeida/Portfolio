import { HeaderInicio } from "../../components/HeaderPast/Header"
import { Title, Subtitle } from "./../../components/reused/Title"
import { Footer } from "../../components/Footer/Footer"
import { Profile } from "./../../components/reused/Profile"
import styles from "./Inicio.module.css"

import linha from "./../../assets/linha.svg"

import { motion } from 'framer-motion'

export function Inicio() {
  return (
    <div className={styles.teste}>
      Testando
      <HeaderInicio />
      <div className={styles.body}>
        <div className={styles.title}>
          <Title size="4rem" weight="500" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Subtitle size="1.8rem" />
          </motion.div>
        </div>
        <div className={styles.linha}>
          <img src={linha} alt="" />
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  )
}

       