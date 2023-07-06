import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./Form.module.css";

const Form = ({onSubmit}) => {
  const [artista, setArtista] = useState("");
  const [cancion, setCancion] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(); 



  const handleInputChangeArtista = (e) => {
    setArtista(e.target.value);
  };

  const handleInputChangeCancion = (e) => {
  setCancion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted({
      artista: artista,
      cancion: cancion
    })

    if (artista.trim().length < 3 || artista.trim().startsWith(" ")) {
      setError("Por favor, ingresa un artista con un mínimo de tres caracteres");
      return;
    }

    if (cancion.trim().length < 6) {
      setError("Por favor, ingresa una canción con un mínimo de seis caracteres");
      return;
    }
    onSubmit({ artista, cancion });
    setArtista("");
    setCancion("");
    setError("");
    setSubmitted(false)
  };

  return (
    <div className={styles.container}>
      <h2>Formulario de Música</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>

          <input
            placeholder="Ingrese artista"
            type="text"
            id="artista"
            value={artista}
            onChange={handleInputChangeArtista}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            placeholder="Ingrese canción"
            type="text"
            id="cancion"
            value={cancion}
            onChange={handleInputChangeCancion}
          />
        </div>
        <button className={styles.enviar} type="submit">Enviar</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}


      {submitted ? 
        <Card artista = {submitted.artista}  cancion = {submitted.cancion}/>
        :undefined
    }
    </div>
  );
};

export default Form;
