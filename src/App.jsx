// import { Contato } from './pages/contato/Contato';
// import { Title } from "./components/Title"
import { Inicio } from './pages/inicio/Inicio'

import styles from './styles/App.module.css';
import './styles/global.css';

function App() {

  return (
    <div className={styles.wrapper}>
      <Inicio />
    </div>
  )
}

export default App
