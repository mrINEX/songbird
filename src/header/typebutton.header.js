import React from 'react';
import { Link } from 'react-router-dom';

const TypeButton = ({title, link}) => {
  return (
    <Link to={link}>
      { title }
    </Link>
  );
}

export default TypeButton;
