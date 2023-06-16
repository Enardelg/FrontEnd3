import { useState } from "react"
import TestComp from "./TestComp"

function Ej2 () {
    const [isActive, setIsActive] = useState(false)

    return(
        <section className="ej2">
            <button className="change"  onClick={() => setIsActive(!isActive)}>
                Cambiar estado
            </button>
            
        {!isActive ? (
            <TestComp onCancel = {() => setIsActive(false)}/>
            //<ChildComponent onEvent={handleEvent} />. Se pueden hacer de las dos formas
        ) : undefined}
        </section>
    )
}

export default Ej2