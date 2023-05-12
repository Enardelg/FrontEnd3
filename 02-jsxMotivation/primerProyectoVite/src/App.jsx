import List from '../../Components/List'
import Title from '../../Components/Title'
import './App.css'

function App() {

    function darLike(){
      console.log('Diste like, hora de disfrutar la película')
    }

    return (
      <div>
        <h1>Mario Bros</h1>
        <p>
        Adaptación de la serie de videojuegos de Nintendo. La película cuenta la historia de Mario y Luigi, dos hermanos que viajan a un mundo oculto para rescatar a la Princesa Peach, capturada por el malvado Rey Bowser. Las cosas, sin embargo no serán sencillas. 
        Mario y Luigi tendrán que enfrentarse a un ejército de setas animadas antes de luchar contra su oponente. Rutas de ladrillos y castillos con múltiples peligros serán algunos de los obstáculos que los hermanos tendrán que superar para conseguir su objetivo.
        </p>
        <button onClick = {darLike}>Dale like</button>
        <Title title='Generos' />
      <List>
        <li>Accion</li>
        <li>Romance</li>
        <li>drama</li>
      </List>
      <Title title='Actores' />
      <List>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </List>
      </div>
    )
}

export default App
