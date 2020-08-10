import React from 'react';
import Transition from './Transition';
import icono from '../assets/images/icon-civil.svg';

export default () => {
  return (
    <Transition>
      <section className="section-civil">
        <figure>
          <img src={icono} className="icono icono-civil" alt="icono" />
        </figure>

        <h1>Civil</h1>

        <h3>JUEVES 11 de Febrero, 11hs.</h3>

        <p>
          Ricardo Gutiérrez 3200
          <br />
          Villa del Parque
          <br />
          Buenos Aires
        </p>

        <p>
          <a
            className="button"
            href="https://www.google.com/maps/place/Subsede+Comunal+11/@-34.6014722,-58.4960327,20.15z/data=!4m13!1m7!3m6!1s0x95bcb6253cf6e28b:0x23d61bc268295802!2sRicardo+Guti%C3%A9rrez+3200,+Buenos+Aires!3b1!8m2!3d-34.6012625!4d-58.4952714!3m4!1s0x95bcb6256a38ebbb:0x1dc1e8b2a2d9554b!8m2!3d-34.601689!4d-58.4960275"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
          &nbsp;
          <a className="button" href="https://www.waze.com/ul?ll=-34.6014722%2C-58.4960327&navigate=yes&zoom=17" target="_blank" rel="noopener noreferrer">
            Waze
          </a>
        </p>
      </section>
    </Transition>
  );
};
