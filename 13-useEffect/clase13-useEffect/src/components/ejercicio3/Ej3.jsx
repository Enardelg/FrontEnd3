import { useState } from "react";
import TestComp from "./TestComp"

function Ej3() {
    const [inputValue,setInputValue] = useState('')
    const [subitedValue, setSubmitedValue] = useState('')

    return (
        <section className="ej3">
        <input
        type="text" 
        value ={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="submit" onClick={() => setSubmitedValue(inputValue)}>
            Enviar
        </button>
        <TestComp value = {subitedValue}/>
        </section>
    )
}

export default Ej3