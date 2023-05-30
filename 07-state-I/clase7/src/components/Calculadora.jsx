import { useState } from 'react'

export function Calculadora(props) {
    const { amount, onEqual } = props
    const [valor, setValor] = useState(0)

    const sumar = () => {
        setValor(valor + amount)
    }

    const restar = () => {
        setValor(valor - amount)
    }
    const reset = () => {
        setValor(0)
    }

    const btnIgual = () => {
        console.log(`El valor actual del calculadora es ${valor}`)
        onEqual(valor)
    }

    return (
        <div className='calculadora'>
            <h1>Calculadora que suma de a {amount}</h1>
            <p>{valor}</p>
            <button onClick={sumar}> +</button>
            <button onClick={restar}> -</button>
            <button onClick={reset}> Reset </button>
            <button onClick={btnIgual}> = </button>
        </div>
    )
}