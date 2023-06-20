import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function PostDetail(){
    const [post, setPost] = useState()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        async function fetchData() {
            const response = await (
                await fetch ((`https://jsonplaceholder.typicode.com/posts/${params.id}`))
            ).json()
            setPost(response)
        }

        fetchData()
    }, [])

    function handleGoBack(){
        navigate(-1)
    }

    if(!post){
        return <p>Cargando...</p>
    }

    return(
        <section className="card-1">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className="volver" onClick={handleGoBack}>Volver</button>
        </section>
    )
}

export default PostDetail