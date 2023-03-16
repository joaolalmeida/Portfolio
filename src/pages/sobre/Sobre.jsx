import { HeaderSobre } from './../../components/HeaderPast/Header'
import { Profile } from './../../components/reused/Profile'
import { Footer } from '../../components/Footer/Footer'

import { IconsGitHub } from './../../components/reused/Icons'
import { IconsLinkedin } from './../../components/reused/Icons'

import styles from './Sobre.module.css'

export function Sobre() {
  return (
    <div>
      <HeaderSobre />
      <div className={styles.body}>
        <div className={styles.profile}>
          <Profile />
          <div className={styles.icons}>
            <IconsGitHub />
            <IconsLinkedin />
          </div>
        </div>
        <div className={styles.text}>
          <h3>Olá :)</h3>
          <p>
            Bem-vindo(a) ao meu portfólio. Esse espaço tem o propósito de reunir
            os últimos projetos que desenvolvi, bem como algumas informações
            sobre mim.
          </p>
          <p>
            Atualmente trabalho como desenvolvedor FrontEnd no Grupo Plan
            Marketing, utilizando principalmente as tecnologias HTML, CSS, Sass,
            JS e Vue, em projetos feitos com Laravel.
          </p>
          <p>
            Disponibilizo no botão abaixo o meu currículo completo, onde pode
            encontrar minhas experiências e formações profissionais.
          </p>
          <a href="#">
            <button>Curriculo completo</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}