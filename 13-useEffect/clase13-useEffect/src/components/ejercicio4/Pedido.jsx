import { useEffect, useState } from "react";

function Pedido (props) {
    const [isConfirmed,setIsConfirmed] = useState(false)

    useEffect(() => {
        console.log("Estamos procesando tu pedido...");
        const timeOut= setTimeout(() =>{
            console.log('Pedido procesado exitosamente');
            setIsConfirmed(true)
        }, 2000)

        return () => {
            console.log('Cancelando pedido...');
            clearTimeout(timeOut)
        }
    },[])

    return (
        <section className="pedido">
            {isConfirmed ? <p>Tu pedido esta listo!!</p> : <p>Presando pedido...</p>}
            <button className="cancelar" onClick={props.onCancel}>Cancelar pedido</button>
        </section>
    )
}

export default Pedido