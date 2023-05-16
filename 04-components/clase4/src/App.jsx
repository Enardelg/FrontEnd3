import './styles.css'
import Saludo from './Components/Saludo'
import Card from './Components/Card'

function App() {

  return (
    <>
    <div className='playground'>
      <Saludo nombre = "Juan">Hola, soy la tarea del Playground</Saludo>
    </div>
    
    <article className='columna'>
    <Card> Hola soy un crio </Card>
    <Card title = "Chamaquito-title"> Crio x2</Card>
    <Card footer = "Chamaquito-footer">Crio x3</Card>
    <Card title = "Chamaquito-title" footer="chamaquito-footer"> Crio x4 </Card>
    </article>
    </>
  )
}

export default App