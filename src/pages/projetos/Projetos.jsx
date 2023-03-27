import { HeaderComplete } from './../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'
import { Project } from '../../components/main/Project'
import landingPage from './../../assets/landingPage.png'
import rocketPlay from './../../assets/rocketPlay.png'
import linhaHorizontal from './../../assets/linha-horizontal.png'

import styles from './Projetos.module.css'

export function Projetos() {
  return (
    <div>
      <HeaderComplete />
      <Project
        texto="Landing Page Responsive"
        imageSrc={landingPage}
        imageLinha={linhaHorizontal}
      />
      <Project
      texto="Rocket Play"
       imageSrc={rocketPlay} />
      <div className={styles.footerProjetos}>
        <Footer />
      </div>
    </div>
  )
}