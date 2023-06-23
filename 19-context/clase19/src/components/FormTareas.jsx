import React, { useContext, useState } from 'react';
import { ListaContext } from '../contexts/ListaContext';

function FormTareas() {
    const [task, setTask] = useState('');
    const { addTask } = useContext(ListaContext);
    const [error, setError] = useState('')
    const [exito, setExito] = useState('');

    const validaciones = () => {
        const digitoNum = /\d/;
        if (task === '') {
            setError('Ya wey, ni que fueras QA (como vas a ingresar el campo vacío) PON OTRA COSA.');
            setExito('')
            } else if(task.length < 2){
                setError('Te pasas!! Ingresa una tarea real, por encima de 2 caracteres.');
                setExito('')
            } else if(digitoNum.test(task)){
                setError("Estoy hasta la MADRE, sólo se ACEPTAN LETRAS!!, ingresa un valor válido por JISUS.");
                setExito('')
            }
            else {
            setError('')
            setExito('Filicididis!! tiria igrigidi corrictiminti!!')
            addTask(task);
            setTask('');
        }

        setTimeout(() => {
            setError('');
            setExito('');
        }, 3500);
    }


    function handleSubmit(e) {
        e.preventDefault()
        validaciones()
    }

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <h2>Kike Tasks</h2>
            <label htmlFor='task'>Ingrese la tarea: </label>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='submit' onClick={handleSubmit}>Nueva tarea</button>
            {error && <p className='error'>{error}</p>}
            {exito && <p className='exito'>{exito}</p>}
        </form>
    );
}

export default FormTareas;

