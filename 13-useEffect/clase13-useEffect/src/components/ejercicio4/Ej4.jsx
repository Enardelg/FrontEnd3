import { useState } from "react";
import Pedido from "./Pedido";

function Ej4() {
    const [inProgress,setInProgress] = useState(false)
    return(
        <section className="ej4">
            {!inProgress ? (
                <button className="encargar" onClick={() => setInProgress(true)}>
                    Hacer pedido
                </button>
            ): (
                <Pedido onCancel = {() => setInProgress(false)}/>
            )}
        </section>
    )
}

export default Ej4