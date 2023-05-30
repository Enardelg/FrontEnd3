import { useState } from 'react'
import './App.css'

let autoId= 0

function App() {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState ('');
  const [mensajeError, setMensajeError] =  useState ('');
  const [valores, setValores] = useState ([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.trim() === "") {
        setMensajeError('Por favor, ingrese un nombre.')
    } else if (numero <= 0 || isNaN(numero)){
      setMensajeError('Ingrese un número mayor a 0.')
    } else {
      setValores ([...valores, {nombre, numero, id: autoId++}])
      setNombre('')
      setNumero('')
      setMensajeError('')
    }
  }

  
  const handleEliminar = (id) => {
    const nuevosValores = valores.filter((valor) => valor.id !== id)
    setValores(nuevosValores)
  }

  return (
    <>
    <section className='form-container'>
      <h2>Formulario</h2>
      <form className='form-card' onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
          type="text" 
          value = {nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Número favorito:
          <input 
          type="text"
          value = {numero}
          onChange={(e) => setNumero(e.target.value)}
          />
        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
      {mensajeError && <p className='mensaje-error'>{mensajeError}</p>}
      <h3>Valores ingresados:</h3>
      <ul className='valores'>
        {valores.map((valor) => (
          <li className='valores-input' key={valor.id}>
            <p>Nombre: {valor.nombre}</p>
            <p>Número: {valor.numero}</p>
            <button onClick={() => handleEliminar(valor.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default App
