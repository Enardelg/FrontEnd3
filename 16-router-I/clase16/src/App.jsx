import { Routes, Route, Link } from 'react-router-dom'
import Index from '../routes/Index'
import Shorts from '../routes/Shorts'
import Suscripciones from '../routes/Suscripciones'
import Explorar from '../routes/Explorar'
import Headers from '../components/Headers'
import './App.css'

function App() {

  return (
    <>
      <Headers/>
      <Routes>
        <Route path = '/' element = {<Index/>}/>
        <Route path = '/shorts' element = {<Shorts/>}/>
        <Route path = '/suscripciones' element = {<Suscripciones/>}/>
        <Route path = '/explorar/*' element = {<Explorar/>}/>
      </Routes>
      <footer>todos los derechos choreados de otros lados - ©kikeIA</footer>
    </>
  )
}

export default App
