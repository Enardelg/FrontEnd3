import { useEffect, useState } from 'react'


function Ej1(){
    const [title,setTitle] = useState('')

    async function handleFetch() {
        const response = await (
            await fetch ('https://jsonplaceholder.typicode.com/posts/1')
        ).json()
        setTitle(response.title)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <p className='ej1'>
            {title}
        </p>
    )
}

export default Ej1
