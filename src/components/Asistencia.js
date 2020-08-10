import React, { useState } from 'react';
import Transition from './Transition';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import icono from '../assets/images/icon-asistencia.svg';

const scriptURL =
  'https://script.google.com/macros/s/AKfycbz-8cplbhBva7CvSzi1qK9ViXt2oj69Saaw9Xld9RjoX4ED7RHl/exec';

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [sending, setSending] = useState(false);
  const [data, setData] = useState(false);

  const desaparecer = () => {
    const timer = setTimeout(() => {
      setData(false);
      console.log('Removed data after 3 seconds!');
    }, 3000);
    return () => clearTimeout(timer);
  };

  const onSubmit = async formValues => {
    console.log(formValues);
    setSending(true);
    setData(false);

    var date = new Date();
    formValues.fecha = date.toUTCString();

    try {
      const response = await axios.get(scriptURL, { params: formValues });
      console.log(response);
      setData(formValues);
      setSending(false);
      desaparecer();
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  return (
    <Transition>
      <section className="section-asistencia">
        <h3>¡Nos encantaría que nos acompañes!</h3>
        <p>
          Por favor, te pedimos que nos confirmes tu asistencia antes del{' '}
          <strong>miércoles 12 de Agosto</strong>.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Completar para cada invitado:</h4>

          {data && data.asistencia === 'si' ? (
            <div className="respuesta">
              <span role="img" aria-label="😍">
                😍
              </span>{' '}
              Te esperamos!
            </div>
          ) : null}

          {data && data.asistencia === 'no' ? (
            <div className="respuesta">
              <span role="img" aria-label="🥺">
                🥺
              </span>{' '}
              Lástima, te extrañaremos...
            </div>
          ) : null}

          {sending ? (
            <div className="respuesta">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : null}

          {!sending && !data ? (
            <div>
              <div>
                <input
                  name="nombre"
                  placeholder="Nombre y Apellido"
                  ref={register({ required: true })}
                />
                {errors.nombre && (
                  <span className="error">Porfa, decinos tu nombre!</span>
                )}
              </div>

              <div>
                <input
                  type="radio"
                  name="asistencia"
                  value="si"
                  ref={register}
                  id="si"
                  defaultChecked
                />
                <label for="si">Asistiré</label>

                <input
                  type="radio"
                  name="asistencia"
                  value="no"
                  id="no"
                  ref={register}
                />
                <label for="no">No podré asistir</label>
              </div>

              <div>
                <select name="menu" ref={register}>
                  <option value="regular" defaultValue>
                    Menú Regular
                  </option>
                  <option value="vegetariano">Menú Vegetariano</option>
                  <option value="celiaco">Menú Celíaco</option>
                </select>
              </div>

              <div>
                <input type="submit" className="button" value="Confirmar" />
              </div>
            </div>
          ) : null}
        </form>
        <img src={icono} className="icono icono-asistencia" alt="Asistencia" />
      </section>
    </Transition>
  );
};
