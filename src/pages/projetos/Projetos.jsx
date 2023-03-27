import { HeaderComplete } from './../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'
import { Project } from '../../components/main/Project'
import landingPage from './../../assets/landingPage.png'
import rocketPlay from './../../assets/rocketPlay.png'
import linhaHorizontal from './../../assets/linha-horizontal.png'

import styles from './Projetos.module.css'
const landingPageTexto = [
  "HTML",
  "CSS",
  "JavaScript",
]
const rocketPlayTexto = [
  "HTML",
  "CSS",
  "JavaScript",
  "Json",
]
export function Projetos() {
  return (
    <div>
      
      <HeaderComplete />

      <Project
        texto="Landing Page Responsive"
        texto1="teste"
        imageSrc={landingPage}
        imageLinha={linhaHorizontal}
        textos={landingPageTexto}
      />

      <Project
        texto="Rocket Play"
        imageSrc={rocketPlay}
        textos={rocketPlayTexto}
      />

      <div className={styles.footerProjetos}>
        <Footer />
      </div>

    </div>
  )
}