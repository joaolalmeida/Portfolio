import styles from './Button.module.css'

import curriculo from "./../../assets/pdf/curriculo.pdf"


export function Button() {
  const baixarPdf = () => {
    const link = document.createElement("a")
    link.href = curriculo
    link.download = "meuArquivo.pdf"
    link.click()
  }

  return (
    <div>
      <button onClick={baixarPdf}>Curriculo completo</button>
    </div>
  )
}