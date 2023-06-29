import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const {theme} = useContext(ContextGlobal)
const params = useParams()
const [dentist, setDentist] = useState({});  //Si los datos son individuales y tienen
//propiedades distintas, un objeto puede ser más apropiado. Si los datos representan una 
//colección o lista de elementos, un array puede ser más adecuado.

async function handleFetch(){
  const response = await(
    await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  ).json()
  setDentist(response)
}

useEffect (() => {
  handleFetch()
}, [])

//  otra opcion aplicando AXIOS
//   useEffect(() => {
//   const fetchData = async () => {
//       axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//       .then(res => setDentist(res.data))
//   }
//   fetchData()
// });


  return (
    <div className='detail' style={{background: theme.homeBackground, color: theme.color}}>
      <h1> Información del Odontólogo {dentist.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail