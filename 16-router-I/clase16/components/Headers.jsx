import { Link } from "react-router-dom"
function Headers() {
    return (
        <header>
            <nav>
                <Link className = "link" to = './'>Home</Link>
                <Link className = "link" to = './shorts'>Shorts</Link>
                <Link className = "link" to = './suscripciones'>Suscripciones</Link>
                <Link className = "link" to = './explorar'>Exlorar</Link>
            </nav>
        </header>
    )
}

export default Headers