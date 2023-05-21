import users from './Components/Card/users.js'
import products from './Components/Card/products.js'
import accounts from './Components/Card/accounts.js'
import './App.css'
import Product from './Components/Card/ProductCard.jsx'

function App() {

    function handlerClick(id) {
        console.log(`Agregado al carrito el producto con id ${id}`)
    }
    return (
        <>
        <div>
        <section>
            <h2>Listado de productos:</h2>
            {products.map((producto) => (
                <Product
                    key={producto.id}
                    product = {producto}
                    ondAddToCard= {handlerClick}/>
            ))}
        </section>
        
        <section className='card-cuentas'>
            <h2>Listado de cuentas:</h2>
            <ul>
                {accounts.map((user) =>(
                    <li className='lista' key = {user.account}>
                        <a href={`https://twitter.com/${user.account}`}>{user.userName}</a>
                    </li>
                ))}
            </ul>
        </section>
    
        <section className='card'>
                    <h2>Listado de usuarios y mascotas</h2>
                    <article>
                        {users.map((user) => (
                            <li className='card-list' key={user.email}>
                                <h2>{user.apodo}</h2>
                                <ul className='lista'>
                                    {user.mascotas.map((mascota) => (
                                        <li className='lista' key={mascota.nombre}>
                                            {mascota.nombre} tiene ({mascota.edad} años) y es de color {mascota.color}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </article>
                </section>
        </div>
        </>
    )
}

export default App
