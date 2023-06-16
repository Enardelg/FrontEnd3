import { useMemo, useState } from 'react'

function Calculadora() {
    const [calcu1, setCalcu1] = useState(0);
    const [calcu2, setCalcu2] = useState(0);
    const [calcu3, setCalcu3] = useState(0);

    const suma = useMemo(() => {
        console.log("calculando suma...");
        return calcu1 + calcu2
    }, [calcu1,calcu2])

    return (
        <section className='calculadora'>
            <div className='inputs'>
            <input type="number" value ={calcu1} onChange = {(e) => setCalcu1(Number(e.target.value))} />
            <input type="number" value ={calcu2} onChange = {(e) => setCalcu2(Number(e.target.value))} />
            <input type="number" value ={calcu3} onChange = {(e) => setCalcu3(Number(e.target.value))} />
            </div>
            <p>La suma es de {suma}</p>
        </section>
    )
}

export default Calculadora