function Card (props){
    return (
        <article className="card-padre">
            {props.title ? <h1> {props.title} </h1> : undefined}
            <article className="card-body"> {props.children} </article>
            {props.footer ? <article className="card-footer"> {props.footer} </article> : undefined}
        </article>
    )
}

export default Card