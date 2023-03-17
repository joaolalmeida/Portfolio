// import { Contato } from './pages/contato/Contato';
// import { Title } from "./components/Title"

import styles from './styles/App.module.css';
import './styles/global.css';

import { BrowserRouter as Router} from 'react-router-dom'
import { Rotas } from './routes/Routes';



function App() {
  return (
    <Router>
        <div className={styles.wrapper}>
          <Rotas />
        </div>
    </Router>
  )
}

export default App
