import React from 'react';
import FormTareas from './components/FormTareas';
import ListaProvider from './contexts/ListaContext';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  return (
    <>
      <ListaProvider>
        <FormTareas />
        <hr />
        <ListaTareas />
      </ListaProvider>
    </>
  );
}

export default App;
