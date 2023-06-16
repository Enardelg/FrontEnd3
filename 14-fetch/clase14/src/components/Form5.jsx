import { useState } from "react"

function Form5(props) {
    const [title, setTitle] = useState('')
    const [body,setBody] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(!title || !body) return
        props.onSubmit({title,body}) //?
    }
    return (
        <form className="form5" onSubmit={handleSubmit}>
            <input  className="input5"
            type="text" 
            placeholder="Título"
            value= {title}
            onChange={(e) => setTitle (e.target.value)}
            />
            <textarea className="text-area5"
            placeholder="Contenido"
            value = {body}
            onChange={(e) => setBody (e.target.value)}
            ></textarea>
            <button className="guardar5" >Guardar</button>
        </form>
    )
}

export default Form5