// import { Contato } from './pages/contato/Contato';
// import { Title } from "./components/Title"
import { Inicio } from './pages/inicio/Inicio'
import { Sobre } from './pages/sobre/Sobre'

import styles from './styles/App.module.css';
import './styles/global.css';

function App() {

  return (
    <div className={styles.wrapper}>
      <Sobre />
    </div>
  )
}

export default App
