import { Select } from 'antd';
import { useState } from 'react';
import Ejercicio1 from './Ejercicio1/App'
import Ejercicio2 from './Ejercicio2/App'
import './App.css'

function App() {
  const[ejNum, setEjNum] = useState("1");
  return (
    <>
      <section className='app'>
        <Select className='select' defaultValue= "1" onChange={setEjNum}>
        <Select.Option value = "1" >Ejercicio 1</Select.Option>
        <Select.Option value = "2" >Ejercicio 2</Select.Option>
        </Select>
      {ejNum === "1" && <Ejercicio1 />}
      {ejNum === "2" && <Ejercicio2 />}
      </section>
    </>
  )
}

export default App
