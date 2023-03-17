import styles from './Skills.module.css'

import reactjs from "./../../assets/skills/reactjs.svg"
import javascript from "./../../assets/skills/javascript.svg"
import typescript from "./../../assets/skills/typescript.svg"
import html from "./../../assets/skills/html.svg"
import css from './../../assets/skills/css.svg'

import linhaHorizontal from './../../assets/linha-horizontal.svg'

import { motion } from 'framer-motion'

import { HeaderComplete } from '../../components/HeaderPast/Header'
import { Footer } from './../../components/Footer/Footer'

export function Skills() {
const container = {
  hidden: { scale: 0.5, y: 100 },
  show: {
    scale: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
}

  return (
    <div>
      <HeaderComplete />
      <div className={styles.skills}>
        <h2>Hard Skills</h2>
        <motion.div initial="hidden" animate="show" variants={container}>
          <div className={styles.skillsIcons}>
            <img src={reactjs} />
            <img src={javascript} />
            <img src={typescript} />
            <img src={html} />
            <img src={css} />
          </div>
        </motion.div>
        <div className={styles.skillsExtras}>
          <p>
            <span>○</span> Git
          </p>
          <p>
            <span>○</span> GitHub
          </p>
          <p>
            <span>○</span> Figma
          </p>
          <p>
            <span>○</span> Sass
          </p>
          <p>
            <span>○</span> Bootstrap
          </p>
          <p>
            <span>○</span> PostgreSQL
          </p>
        </div>
        <img src={linhaHorizontal} alt="" />

        <div className={styles.softSkills}>
          <h2>Soft Skills</h2>

          <h3>
            <span>✓</span> Resiliência, tolerância e flexibilidade
          </h3>

          <p>
            Aprendi a importância e pude desenvolver essas habilidades atuando
            em instituições públicas, interagindo e trabalhando com os mais
            variados perfis de pessoas.
          </p>
          <h3>
            <span>✓</span> Inteligência emocional
          </h3>
          <p>
            Procuro desenvolver essa habilidade através de leitura, cursos e
            eventos sobre o tema, por perceber que é uma skill que traz uma
            maior qualidade de vida para mim, e, por consequência, para as
            pessoas ao meu redor.
          </p>
          <h3>
            <span>✓</span> Aprendizado ativo
          </h3>
          <p>
            Essa é uma habilidade pela qual tenho me dedicado cada vez mais,
            tanto para me manter atualizado, frente às rápidas mudanças do
            mundo, quanto para me manter motivado na busca de evolução pessoal e
            profissional.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  )
}