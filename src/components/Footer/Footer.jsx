import styles from './Footer.module.css'

export function Footer() {
  return (
    <p className={styles.footer}>
      Desenvolvido por 👉
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-almeida-11a854233/"
        target="_blank"
      >
        João Almeida
      </a>
    </p>
  )
}