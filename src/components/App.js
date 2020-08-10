import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomModal from './Modal';
import Navigation from './Navigation';
import Bienvenidos from './Bienvenidos';
import Civil from './Civil';
import Fiesta from './Fiesta';
import Asistencia from './Asistencia';
import Regalo from './Regalo';
import logo from '../assets/images/logo.svg';
import anillo1 from '../assets/images/anillo-1.svg';
import anillo2 from '../assets/images/anillo-2.svg';
import anillo3 from '../assets/images/anillo-3.svg';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <div className="container">
        <header className="logo">
          <img src={logo} className="logo" alt="Sol &amp; Lucho" />
        </header>
        <Navigation />
        <main className="main">
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/civil" component={Civil} />
              <Route path="/fiesta" component={Fiesta} />
              <Route path="/asistencia" component={Asistencia} />
              <Route path="/regalo" component={Regalo} />
              <Route path="/" component={Bienvenidos} />
            </Switch>
          </AnimatePresence>
        </main>
        <CustomModal />
      </div>
      <div className="anillos">
        <img src={anillo1} className="anillo anillo-1" alt="Anillo" />
        <img src={anillo2} className="anillo anillo-2" alt="Anillo" />
        <img src={anillo3} className="anillo anillo-3" alt="Anillo" />
      </div>
      <div className="bg bg-left" />
      <div className="bg bg-right" />
    </div>
  );
};

export default App;
