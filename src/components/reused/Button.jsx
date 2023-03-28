import styles from './Button.module.css'

import curriculo from "./../../assets/pdf/curriculo.pdf"

export function Curriculo() {
  const baixarPdf = () => {
    const link = document.createElement("a")
    link.href = curriculo
    link.download = "meuArquivo.pdf"
    link.click()
  }

  return (
    <div className={styles.button}>
      <button onClick={baixarPdf}>Curriculo completo</button>
    </div>
  )
}


export function Pagina(props) {
  return (
    <div className={styles.button}>
      <a href={props.href} target="_blank">
        <button>Página</button>
      </a>
    </div>
  )
}


export function Github(props) {
  return (
    <div className={styles.button}>
      <a href={props.href} target="_blank">
        <button>GitHub</button>
      </a>
    </div>
  )
}

