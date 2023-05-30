import './App.css'
import { Calculadora } from './components/Calculadora'
import { useState } from 'react'

function App() {
  const [sum, setSum] = useState(0)

  // const igual = valor => {
  //   console.log(valor)
  // }

  const sumarTotales = valor => {
    setSum(valor + sum)
  }

  return (
    <>
      <Calculadora amount={5} onEqual={sumarTotales}></Calculadora>
      <Calculadora amount={1} onEqual={sumarTotales}></Calculadora>
      <Calculadora amount={13} onEqual={sumarTotales}></Calculadora>
      <h2>Suma total: {sum}</h2>
    </>
  )
}

export default App