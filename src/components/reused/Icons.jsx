import linkedin from "../../assets/linkedin.svg"
import linkedinVerde from "../../assets/linkedin-verde.svg"

import github from "../../assets/github.svg"
import githubVerde from "../../assets/github-verde.svg"
import sol from "../../assets/sol.svg"

import styles from "./Icons.module.css"

import React, { useState } from "react"

export function IconsGitHub() {
  const [isHovered, setIsHovered] = useState(false)
  const [svgImage, setSvgImage] = useState(github)

  return (
    <div
      className={styles.icons}
      onMouseOver={() => {
        setIsHovered(true)
        setSvgImage(githubVerde)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setSvgImage(github)
      }}
    >
      <a href="#">
        <img src={svgImage} alt="SVG" />
      </a>
    </div>
  )
}

export function IconsLinkedin() {
  const [isHovered, setIsHovered] = useState(false)
  const [svgImage, setSvgImage] = useState(linkedin)

  return (
    <div
      className={styles.icons}
      onMouseOver={() => {
        setIsHovered(true)
        setSvgImage(linkedinVerde)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setSvgImage(linkedin)
      }}
    >
      <a href="#">
        <img src={svgImage} alt="SVG" />
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
