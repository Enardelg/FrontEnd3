import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import games from './games/games'
import Form from '../components/Form'


function Index() {
    const [game, setGame] = useState([])
    const [searchParams] = useSearchParams()

    async function fetchData(filters) {
        let juegosFiltrados = [...games]
        console.log(filters, juegosFiltrados);

        if (filters.genre) {
            juegosFiltrados = juegosFiltrados.filter(
                (game) => game.tags.includes(filters.genre)
            )
        }
        if (filters.minPlayedTime) {
            juegosFiltrados = juegosFiltrados.filter(
                (game) => game.playedTime >= filters.minPlayedTime
            )
        }
        setGame(juegosFiltrados)
    }
        useEffect(() => {
            const params = {}
            console.log("mirame, Yuhuu!!");
            searchParams.forEach((value, key) => {
                params[key] = value
            })
            
            fetchData(params)
        }, [searchParams])
    

    return (
        <section className="card-filtro">
            <Form />
            {game.map((game) => (
                <div className="filtro" key={game.id}>
                    <h2>Título: {game.name}</h2>
                    <ul className="lista">
                        {game.tags.map((tag) => (
                            <li key={tag} >Género: {tag} </li>
                        ))}
                    </ul>
                    <p>Tiempo jugado: {game.playedTime}</p>
                    <Link className="link" to={`./games/${game.id}`}>Ver game</Link>
                </div>
            ))}
        </section>
    )
}

export default Index

