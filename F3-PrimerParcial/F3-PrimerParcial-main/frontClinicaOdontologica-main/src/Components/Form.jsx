import { useState } from "react";
import useInput from './utils/useInput';
import swal from 'sweetalert';

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validName = /^.{5,}$/;

const Form = () => {
  const name = useInput('text', 'name', 'Ingrese nombre');
  const email = useInput('email', 'email', 'Ingrese email');
  const [msg, setMsg] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    name.setSubmitted(true);
    email.setSubmitted(true);

    const isEmailValid = validEmail.test(email.value);
    const isNameValid = validName.test(name.value);

    if (!name.value || !email.value) {
      setMsg('Debes completar ambos campos.');
      setTimeout(() => {
        setMsg('');
      }, 2000);
      return;
    } else if (!isNameValid) {
      setMsg('Solo puedes ingresar letras, con un mínimo de 5 dígitos.');
      setTimeout(() => {
        setMsg('');
      }, 2000);
      return;
    } else if (!isEmailValid) {
      setMsg('Debes ingresar un correo electrónico válido.');
      setTimeout(() => {
        setMsg('');
      }, 2000);
      return;
    } else {
      setMsg('');
      swal({
        title: '¡¡Excelente!!',
        text: `${name.value} tu correo electrónico fue enviado correctamente, a la brevedad nuestro equipo se contactará contigo.`,
        icon: 'success',
        button: 'Muchas Gracias',
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={onClick}>
        <h2>Completa tus datos en este formulario:</h2>
        <input {...name} />
        <input {...email} />
        <input className="submit" type="submit" value="Enviar" />
        {msg && <p className="error">{msg}</p>}
      </form>
    </div>
  );
};

export default Form;
