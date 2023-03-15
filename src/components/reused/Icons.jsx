import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import sol from "../../assets/sol.svg"

import styles from './Icons.module.css'

// export function Icons() {
//   return (
//      <div className={styles.icons}>
//         <a href="linkedin.com/in/joão-almeida-11a854233"> <img src={linkedin} alt="Linkedin" /></a>
//         <a href="github.com/joaolalmeida"> <img src={github} alt="Github" /></a>
//         <a href="#"> <img src={sol} alt="Sol" /></a>
//       </div>
//   )
// }

// export function IconsGithubLinkedin() {
//   return (
//     <div className={styles.icons}>
//         <a href="linkedin.com/in/joão-almeida-11a854233"> <img src={linkedin} alt="Linkedin" /></a>
//         <a href="github.com/joaolalmeida"> <img src={github} alt="Github" /></a>
//       </div>
//   )
// }

// export function IconsSun() {
//   return (
//      <div className={styles.icons}>
//         <a href="#"> <img src={sol} alt="Sol" /></a>
//       </div>
//   )
// }

export function IconsGitHub() {
  return (
    <div className={styles.icons}>
      <a href="github.com/joaolalmeida">
        <img src={github} alt="Github" />
      </a>
    </div>
  )
}
export function IconsLinkedin() {
  return (
    <div className={styles.icons}>
      <a href="linkedin.com/in/joão-almeida-11a854233">
        <img src={linkedin} alt="Linkedin" />
      </a>
    </div>
  )
}

export function IconsSun() {
  return (
    <div className={styles.icons}>
      <a href="#">
        <img src={sol} alt="Sol" />
      </a>
    </div>
  )
}