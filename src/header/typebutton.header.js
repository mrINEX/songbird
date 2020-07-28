import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const TypeButton = ({title, link}) => {
  return (
    <NavLink to={link} className='type-birds-buttons' activeClassName="active-link">
      { title }
    </NavLink>
  );
}

export default TypeButton;
