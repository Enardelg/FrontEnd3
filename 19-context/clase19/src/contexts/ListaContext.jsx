import React, { useState, createContext } from 'react';

export const ListaContext = createContext({});

let autoId = 0;

function ListaProvider(props) {
    const [tarea, setTarea] = useState([]);

    function addTask(newTask) {
        setTarea([
            ...tarea,
            {
                tarea: newTask,
                id: autoId++
            }
        ]);
    }

    function removeTask(id) {
        setTarea(tarea.filter((task) => task.id !== id));
    }

    const value = {
        tarea,
        addTask,
        removeTask
    };

    return (
        <ListaContext.Provider value={value}>
            {props.children}
        </ListaContext.Provider>
    );
}

export default ListaProvider;
