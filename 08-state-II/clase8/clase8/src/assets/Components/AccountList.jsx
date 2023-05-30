import styles from './AccountList.module.css'
const AccountList = (props) => {
    return (
        <section className={styles.card}>
            {props.cuentas.map((cuenta) =>{
                return (
                    <div
                        key = {cuenta.id}
                        className = "card"
                        onClick = {() => props.onClick(cuenta)}
                    >
                        <p>{cuenta.nombre} {props.seguidos.includes(cuenta.id) && ( <button >Siguiendo</button>)}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default AccountList