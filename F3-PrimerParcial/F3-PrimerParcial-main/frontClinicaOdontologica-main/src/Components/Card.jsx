import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/logoOdonto.jpeg";
import { ContextGlobal } from "./utils/global.context";
import swal from 'sweetalert';

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]');
    const existingDentist = dentists.find((d) => d.id === id);
    if (existingDentist) {
      setButtonClicked(true);
    }
  }, [id]);

  const dentist = {
    id,
    name,
    username
  };

  const addFav = () => {
    const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]');
    const existingDentist = dentists.find((d) => d.id === dentist.id);

    if (existingDentist) {
      swal({
        title: `¿Quieres quitar a ${existingDentist.name} de tus favoritos?`,
        text: `Podrás agregar a ${existingDentist.name} nuevamente cuando desees.`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          const updatedDentists = dentists.filter((d) => d.id !== existingDentist.id);
          localStorage.setItem("dentistas", JSON.stringify(updatedDentists));
          swal(`Poof!,  ${existingDentist.name} ya no está entre tus favoritos `, {
            icon: "success",
          });
          setButtonClicked(false);
        } else {
          swal({
            text: `Operación cancelada`,
            icon: "error",
            button: "Entendido",
          });
        }
      });
    } else {
      dentists.push(dentist);
      localStorage.setItem("dentistas", JSON.stringify(dentists));
      swal({
        title: "¡¡Excelente elección!!",
        text: `${dentist.name}, fue agregado a favoritos`,
        icon: "success",
        button: "Excelente",
      });
      console.log('Felicidades!', `Dentista con ID ${dentist.id} agregado exitosamente`);
      console.log(dentists);
      setButtonClicked(true);
    }
  };


  return (
    <div className="card" style={{ background: theme.cardBackground }}>
      <div className="perfil">
        <img src={img} alt="image_doctor" />
      </div>
      <h2><Link to={`/${id}`}>{name}</Link></h2>
      <h3>Usuario: {username}</h3>
      <button
        onClick={addFav}
        className={`favButton ${buttonClicked ? 'active' : ''}`}
        style={{
          background: buttonClicked ? theme.buttomActive : theme.buttom,
        }}
      >
        🌟
      </button>
    </div>
  );
};

export default Card;
