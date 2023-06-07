import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from "./Card.module.css";

const Card = ({ id, artista, cancion, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={styles.card}>
      <ul className={styles.lista}>
        <li className={styles.valoresInput}>
          <h2>Card Música <FontAwesomeIcon icon={faMusic} /></h2>
          <p>Artista: {artista}</p>
          <p>Cancion: {cancion}</p>
          <button className={styles.deleteButton} onClick={handleDelete}> Eliminar <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Card;
