import { useEffect } from "react";

function Ej1() {
    useEffect(() =>{
        console.log("El componente de ha montado y te saluda: Hola MORTAL! ")
    }, [])

    return (
        <section className="ej1">
            <p>HOLA MUNDO MUNDIAL!!!</p>
        </section>
    )
}

export default Ej1