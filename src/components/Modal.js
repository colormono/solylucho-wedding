import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={closeModal} overlayClassName="Overlay" shouldCloseOnOverlayClick={false}>
      <h2>
        <span role="img" aria-label="love">
          ❤️
        </span>
        <br />
        Save the <em>new</em> date{' '}
      </h2>
      <p>Querida familia y amigos, con mucha responsabilidad decidimos posponer nuestra fiesta de casamiento para el día:</p>
      <h3>SABADO 13 de Febrero, 17 a 01 hs.</h3>
      <p>Lamentamos los inconvenientes y agradecemos que nos entiendan en esta circunstancia tan especial.</p>
      <p>
        Los esperamos!
        <br />
        <strong>Sol y Lucho</strong>
      </p>
      <button onClick={closeModal} className="button">
        Continuar
      </button>
    </Modal>
  );
};

export default CustomModal;
