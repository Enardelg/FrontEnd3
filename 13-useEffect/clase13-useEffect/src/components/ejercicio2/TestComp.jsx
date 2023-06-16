import { useEffect } from "react";

function TestComp() {
    useEffect(() => {
        console.log('Activado')

        return () =>{
            console.log("Desactivado");
        }
    },[])

    return (
        <section className="donTa">
            *don ta el testo? ACA TA!
        </section>
    )
}

export default TestComp