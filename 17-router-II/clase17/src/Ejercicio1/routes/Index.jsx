import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Index() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await(
                await fetch('https://jsonplaceholder.typicode.com/posts')
            ).json()
            setPost(response);
        }

        fetchData();
    }, []);

    return (
        <section className="container">
            <h1>Index</h1>
            {post.map((post) => (
                <div className="card-index" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="contain-link">
                    <Link className="link" to={`./posts/${post.id}`}>Ver post</Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Index;
