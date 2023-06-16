import { useEffect } from "react";

function TestComp (props) {
    useEffect(()=> {
        console.log(`Buscando datos en api.github.com/users/${props.value}`);
    }, [props.value]);

    return (
        <p>{props.value}</p>
    )
}

export default TestComp 