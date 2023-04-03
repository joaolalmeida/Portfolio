import { HeaderComplete } from './../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'
import { Project } from '../../components/main/Project'

import landingPage from './../../assets/landingPage.png'
import rocketPlay from './../../assets/rocketPlay.png'
import portfolio from "./../../assets/portfolio.png"

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
const portfolioTexto = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "CSS Modules",
  "React Router DOM",
  "Framer Motion",
]

export function Projetos() {
  return (
    <div>
      <HeaderComplete />

      <Project
        texto="Landing Page Responsive" //Texto de titulo do projeto
        link={"https://responsive-landing-page-joaolalmeida.netlify.app/"} // link de redirecionamento da imagem do projeto
        imageSrc={landingPage} // Imagem do projeto
        imageLinha={linhaHorizontal} // Imagem da linha(não usar no ultimo projeto)
        textos={landingPageTexto} // textos das tecnologias utilizadas (criar uma const com os textos)
        href={"https://responsive-landing-page-joaolalmeida.netlify.app/"} // link do botão pagina
        github={"https://github.com/joaolalmeida/responsive-landing-page"} // link do botao github
      />

      <Project
        texto="Rocket Play"
        link={"https://rocketpay.netlify.app/"}
        imageSrc={rocketPlay}
        imageLinha={linhaHorizontal}
        textos={rocketPlayTexto}
        href={"https://rocketpay.netlify.app/"}
        github={"https://github.com/joaolalmeida/Rocketpay"}
      />

      <Project
        texto="Portfólio"
        link={"https://portfolio-joaoalmeida.netlify.app/"}
        imageSrc={portfolio}
        textos={portfolioTexto}
        href={"https://portfolio-joaoalmeida.netlify.app/"}
        github={"https://github.com/joaolalmeida/Portifolio"}
      />

      <div className={styles.footerProjetos}></div>
      <div className={styles.footerProjetos}>
        <Footer />
      </div>
    </div>
  )
}