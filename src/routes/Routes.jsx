import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Inicio } from './../pages/inicio/Inicio'
import { Sobre } from './../pages/sobre/Sobre'
import { Skills } from './../pages/skills/Skills'
import { Projetos } from './../pages/projetos/Projetos'
import { Contato } from './../pages/contato/Contato'

export function Rotas() {
    return (
      <Routes>
          <Route exact path="/" Component={Inicio} />
          <Route exact path="/sobre" Component={Sobre} />
          <Route exact path="/skills" Component={Skills} />
          <Route exact path="/projetos" Component={Projetos} />
          <Route exact path="/contato" Component={Contato} />
      </Routes>
    )
}