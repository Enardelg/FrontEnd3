import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import games from './games';

function GameDetail() {
  const [game, setGame] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const juegoEncontrado = games.find((game) => game.id === params.id);
    setGame(juegoEncontrado);
  }, [params.id]);

  function handleGoBack() {
    navigate(-1);
  }

  if (!game) {
    return <h2>Cargando...</h2>;
  }

  return (
    <section className="card-game">
      <h2>{game.name}</h2>
      <button  className="volver" onClick={handleGoBack}>Volver</button>
    </section>
  );
}

export default GameDetail;
