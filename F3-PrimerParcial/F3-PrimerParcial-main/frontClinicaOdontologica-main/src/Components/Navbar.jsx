import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import modoClaro from '../images/modo_claro-removebg-preview.png';
import modoOscuro from '../images/modo_oscuro-removebg-preview.png';

const Navbar = () => {
  const { theme, handleTheme } = useContext(ContextGlobal);
  const [cambiarModoImg, setCambiarModoImg] = useState(modoClaro);

  const handleClick = () => {
    if (cambiarModoImg === modoClaro) {
      setCambiarModoImg(modoOscuro);
    } else {
      setCambiarModoImg(modoClaro);
    }
    handleTheme();
  };

  return (
    <nav className="nav" style={{ background: theme.navBackground }}>
      <Link to={'/'}>
        <h2 className='icono' style={{ color: theme.color }}><span>D</span>H Clínica Odontológica</h2>
      </Link>
      <div className='divNav'>
        <img src="" alt="" />
        <Link to={'/'} style={{ color: theme.color }}>Home</Link>
        <Link to={'/contact'} style={{ color: theme.color }}>Contacto</Link>
        <Link to={'/favs'} style={{ color: theme.color }}>Favoritos</Link>
        <button className='change' onClick={handleClick}>
          <img className='cambiarModo' src={cambiarModoImg} alt="Modo-claro" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
