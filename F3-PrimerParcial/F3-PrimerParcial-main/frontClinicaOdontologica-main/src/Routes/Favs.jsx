import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const storedDentists = JSON.parse(localStorage.getItem('dentistas'));
    if (storedDentists) {
      setDentists(storedDentists);
    }
  }, []);

  const removeFromFavorites = (id) => {
    const updatedDentists = dentists.filter((dentist) => dentist.id !== id);
    setDentists(updatedDentists);
    localStorage.setItem('dentistas', JSON.stringify(updatedDentists));
  };

  return (
    <div className="favs" style={{ background: theme.homeBackground, color: theme.color }}>
      <h1>Lista de Odontólogos</h1>
      {dentists.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Oops!!  Todavía no tienes odontólogos en favoritos.</p>
      ) : (
        <div className="card-grid">
          {dentists.map((item) => (
            <Card
              name={item.name}
              username={item.username}
              key={item.id}
              id={item.id}
              active
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
