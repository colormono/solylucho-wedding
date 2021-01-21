import React from 'react';
import Transition from './Transition';

export default () => (
  <Transition>
    <section className="section-bienvenidos">
      <div className="polaroid">
        <video poster={process.env.PUBLIC_URL + '/video-cover.jpg'} autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4" />
          <source src={process.env.PUBLIC_URL + '/video.webm'} type="video/webm" />
          <source src={process.env.PUBLIC_URL + '/video.ogv'} type="video/ogg" />
          Tu navegador no admite el elemento <code>video</code>.
        </video>
      </div>

      <p>
        Después de 12 años compartidos... <strong>nos casamos!</strong>
        <br />
        <em>...y queremos compartirlo con vos.</em>
      </p>
    </section>
  </Transition>
);
