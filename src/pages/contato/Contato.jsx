import { HeaderSobre } from "./../../components/HeaderPast/Header"
import { Title, Subtitle } from "../../components/reused/Title"
import linha from "./../../assets/linha.svg"
import styles from './Contato.module.css'
import { IconsGitHub, IconsLinkedin } from "../../components/reused/Icons"
import { Footer } from "../../components/Footer/Footer"

export function Contato() {
  return (
    <div>
      <HeaderSobre color={"rgba(0, 136, 255, 0)"} />
      <div className={styles.body}>
        <div className={styles.titleAndSubtitle}>
          <div className={styles.title}>
            <Title size="3rem" />
          </div>
          <img src={linha} alt="" className={styles.linhaVertical}/>
          <Subtitle size="1.5rem" />
        </div>
        <div className={styles.icons}>
          <IconsLinkedin />
          <IconsGitHub />
        </div>
        <div className={styles.info}>
          <p>joaolalmeida20@gmail.com</p>
          <p>41 9 9677 2039</p>
          <p>Curitiba / PR</p>
        </div>
      </div>
      <div className={styles.contatoFooter}>
        <Footer />
      </div>
    </div>
  )
}