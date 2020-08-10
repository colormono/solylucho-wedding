import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default () => {
  let location = useLocation();

  const items = [
    {
      label: 'Bienvenidos',
      to: '/'
    },
    {
      label: 'Civil',
      to: '/civil'
    },
    {
      label: 'Fiesta',
      to: '/fiesta'
    },
    {
      label: 'Asistencia',
      to: '/asistencia'
    },
    {
      label: 'Regalo',
      to: '/regalo'
    }
  ];

  return (
    <nav>
      <ul>
        {items.map(({ label, to }) => (
          <li
            key={label}
            className={to === location.pathname ? 'current' : 'regular'}
          >
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
