import React from 'react';

let Saludo = ({ nombre, children }) => {
    return (
        <React.Fragment>
            <p>Hola {nombre}.</p>
            <p>{children}</p>
        </React.Fragment>
    );
};

export default Saludo
