import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Inicio } from './../pages/inicio/Inicio'
import { Sobre } from './../pages/sobre/Sobre'

export function Rotas() {
    return (
      <Routes>
        <Route exact path="/" Component={Inicio} />
        <Route exact path="/sobre" Component={Sobre} />
      </Routes>
    )
}