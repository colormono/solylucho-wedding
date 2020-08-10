import React from 'react';
import Transition from './Transition';
import icono from '../assets/images/icon-regalo.svg';

export default () => {
  return (
    <Transition>
      <section className="section-regalo">
        <img src={icono} className="icono icono-regalo" alt="icono" />
        <p>
          <strong>Lo más importante es tu presencia</strong>,
          <br />
          pero si querés ayudarnos con la luna de miel...
        </p>
        <em>
          CBU: 0170326740000041185993
          <br />
          Caja de Ahorro: 326-411859/9
          <br />
          CUIT: 27354058508
          <br />
          Alias: mariasol.rivas
          <br />
          Banco Francés
        </em>
      </section>
    </Transition>
  );
};
