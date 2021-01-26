import React from 'react';
import Transition from './Transition';
import iconoFiesta from '../assets/images/icon-fiesta.svg';
import iconoCeremonia from '../assets/images/icon-ceremonia.svg';

export default () => {
  return (
    <Transition>
      <section className="section-fiesta">
        <figure>
          <img src={iconoCeremonia} className="icono icono-ceremonia" alt="Ceremonia" />
          <img src={iconoFiesta} className="icono icono-ceremonia" alt="Fiesta" />
        </figure>

        <h3>SABADO 13 de Febrero, 17 a 01 hs.</h3>

        <p>
          <em>Allegra Espacio Multieventos</em>
          <br />
          Calle Carola Lorenzini 1500
          <br />
          General Rodríguez
          <br />
          Buenos Aires
        </p>

        <p>
          <em>
            La fiesta comienza con la celebración de nuestros votos, <br />
            <strong>no llegues tarde!</strong>
          </em>
        </p>

        <p>
          <a
            className="button"
            href="https://www.google.com/maps/place/Allegra+Espacio+Multieventos/@-34.604579,-58.8741873,17z/data=!4m13!1m7!3m6!1s0x95bc910702008615:0xf468c484eae3b655!2sCalle+Carola+Lorenzini+1500,+Francisco+Alvarez,+Buenos+Aires!3b1!8m2!3d-34.604579!4d-58.8719986!3m4!1s0x0:0x1bf0b83a3fae6a0f!8m2!3d-34.6052043!4d-58.8716333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
          &nbsp;
          <a className="button" href="https://www.waze.com/ul?ll=-34.6049136%2C-58.8716793&navigate=yes&zoom=17" target="_blank" rel="noopener noreferrer">
            Waze
          </a>
        </p>
      </section>
    </Transition>
  );
};
