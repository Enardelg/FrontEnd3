import styles from './Card.module.css'

function Product ({product, ondAddToCard}){
    
    function handlerClick(){
        ondAddToCard(product.id)
    }

    return (
        <section className={styles.cardProduct} key={product.id}>
            <h2>{product.nombre}</h2>
            <p>ID {product.id}</p>
            <p>Precio: {product.precio}</p>
            <p>Descripción: {product.descripcion}</p>
            <button onClick = {handlerClick}>Agregar al carrito </button>
        </section>
    )
}

export default Product;