import React, { useContext } from "react";
import { ListaContext } from '../contexts/ListaContext';

function ListaTareas() {
    const { tarea, removeTask } = useContext(ListaContext)
    const contadorTareas = tarea.length;
    return (
        <section className="card-lista">
            <h2 className="contador" >Cantidad de tareas: {contadorTareas}</h2>
            {tarea.map((task) => (
                <div className="lista" key={task.id}>
                    <p>{task.tarea}</p>
                    <button className="eliminar" onClick={() => removeTask(task.id)}>Eliminar</button>
                </div>
            ))}
        </section>
    );
}

export default ListaTareas;
