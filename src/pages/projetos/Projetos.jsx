import { HeaderComplete } from './../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'
import { Project } from '../../components/main/Project'

import feedSocialNetwork from "./../../assets/feedSocialNetwork.png"
import rocketPlay from './../../assets/rocketPlay.png'
import portfolio from "./../../assets/portfolio.png"


import linhaHorizontal from './../../assets/linha-horizontal.png'

import styles from './Projetos.module.css'

const feedSocialNetworkTexto = [
  "JavaScript",
  "Typescript",
  "Vite",
  "CSS Modules",
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
        texto="Feed Social NetWork" //Texto de titulo do projeto
        link={"https://feed-social-network.netlify.app/"} // link de redirecionamento da imagem do projeto
        imageSrc={feedSocialNetwork} // Imagem do projeto
        imageLinha={linhaHorizontal} // Imagem da linha(não usar no ultimo projeto)
        textos={feedSocialNetworkTexto} // textos das tecnologias utilizadas (criar uma const com os textos)
        href={"https://feed-social-network.netlify.app/"} // link do botão pagina
        github={"https://github.com/joaolalmeida/feedSocialNetwork"} // link do botao github
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