import React, { useState } from "react";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import "./App.css";

let autoId = 0;

function App() {
  const [valores, setValores] = useState([]);

  const handleSubmit = (valor) => {
    setValores([...valores, { id: autoId++, data: valor }]);
  };

  const handleDelete = (id) => {
    setValores(valores.filter(item => item.id !== id));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <div className="ingresos">
        {valores  
          ? valores.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              artista={item.data.artista}
              cancion={item.data.cancion}
              onDelete={handleDelete}
            />
          ))
        : undefined}
      </div>
    </>
  );
}

export default App;
