import Ej1 from './components/ejercicio1/Ej1'
import Ej2 from './components/ejercicio2/Ej2'
import Ej3 from './components/ejercicio3/Ej3'
import Ej4 from './components/ejercicio4/Ej4'
import './App.css'

function App() {
  return (
    <section className='container'>
    <h1>Ejercicio 1</h1>
    <Ej1/>
    <h1>Ejercicio 2</h1>
    <Ej2/>
    <h1>Ejercicio 3</h1>
    <Ej3/>
    <h1>Ejercicio 4</h1>
    <Ej4/>
    </section>
  )
}

export default App
