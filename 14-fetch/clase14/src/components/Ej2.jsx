import { useState, useEffect } from "react";

function Ej2() {
    const [loading, setLoading] = useState(false);
    const [hecho, setHecho] = useState([]);

    useEffect(() => {
        let timeoutId;

        async function handleFetch() {
            setLoading(true);
            const response = await fetch("https://cat-fact.herokuapp.com/facts");
            const data = await response.json();
            setHecho(
                data.map((hecho) => ({
                    id: hecho["_id"],
                    text: hecho.text,
                }))
            );
            setLoading(false); // Aquí estableces el estado de carga en falso después de recibir los datos
        }

        if (loading) {
            timeoutId = setTimeout(() => {
                handleFetch();
            }, 2000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [loading]);

    return (
        <section className="ej2">
            {hecho.length > 0 ? (
                undefined
            ) : (
                <button className="buscar" onClick={() => setLoading(true)}>
                    Buscar datos
                </button>
            )}
            {loading && !hecho.length && <p>Cargando... espera wey!</p>}
            <ul className="container">
                {hecho.map((fact) => (
                    <p key={fact.id}>{fact.text}</p>
                ))}
            </ul>
        </section>
    );
}

export default Ej2;
