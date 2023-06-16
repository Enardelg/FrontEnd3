import { Routes, Route, Link } from 'react-router-dom'
import Musica from './Explorar/Musica'
import Peliculas from './Explorar/Peliculas'
import Tendencias from './Explorar/Tendencias'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClapperboard} from '@fortawesome/free-solid-svg-icons'
function Explorar() {
    return (
        <>
        <section className='explorar'>
        <h1>Explorar</h1>
        <p>buscando...</p>
        <h2>FilmVortex <FontAwesomeIcon icon = {faClapperboard}/></h2>

        <section className='multi-var'>
            <Link  className = "link" to = 'musica'>Musica</Link>
            <Link className = "link" to = 'peliculas'>Películas</Link>
            <Link className = "link" to = 'tendencias'>Tendencias</Link>
        </section>

        <Routes>
            <Route  path = 'musica' element = {<Musica/>}/>
            <Route path = 'peliculas' element = {<Peliculas/>}/>
            <Route path = 'tendencias' element = {<Tendencias/>}/>
        </Routes>
        </section>
        </>
    )
}

export default Explorar