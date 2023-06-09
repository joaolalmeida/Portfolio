import styles from './Softskills.module.css'

import  linhaHorizontal  from './../../assets/linha-horizontal.svg'

import { motion } from 'framer-motion'

export function SoftSkills () {
  return (
    <motion.div
      className={styles.softSkills}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className={styles.linha}>
        <img src={linhaHorizontal} alt="" />
      </div>

      <h2>Soft Skills</h2>

      <div className={styles.skills}>
        <h3>
          <span>✓</span> Resiliência, tolerância e flexibilidade
        </h3>
        <p>
          Aprendi a importância e pude desenvolver essas habilidades atuando em
          instituições públicas, interagindo e trabalhando com os mais variados
          perfis de pessoas.
        </p>
        <h3>
          <span>✓</span> Inteligência emocional
        </h3>
        <p>
          Procuro desenvolver essa habilidade através de leitura, cursos e
          eventos sobre o tema, por perceber que é uma skill que traz uma maior
          qualidade de vida para mim, e, por consequência, para as pessoas ao
          meu redor.
        </p>
        <h3>
          <span>✓</span> Aprendizado ativo
        </h3>
        <p>
          Essa é uma habilidade pela qual tenho me dedicado cada vez mais, tanto
          para me manter atualizado, frente às rápidas mudanças do mundo, quanto
          para me manter motivado na busca de evolução pessoal e profissional.
        </p>
      </div>
    </motion.div>
  )
}