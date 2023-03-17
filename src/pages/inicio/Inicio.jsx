import { HeaderInicio } from "../../components/HeaderPast/Header"
import { Title } from "../../components/reused/Title"
import { Footer } from "../../components/Footer/Footer"
import { Profile } from "./../../components/reused/Profile"
import styles from "./Inicio.module.css"

import linha from "./../../assets/linha.svg"


export function Inicio() {
  return (
    <div className={styles.teste}>
      <HeaderInicio />
      <div className={styles.body}>
        <div className={styles.title}>
          <Title size="4rem" weight="500" />
          <h2>
            Dev FrontEnd <span>(Jr)</span>
          </h2>
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
