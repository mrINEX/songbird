import React from 'react';
import TypeButton from './typebutton.header';
import './header.scss';

const typeBirds = [
  ['Разминка', '/warm-up'],
  ['Воробьиные', '/passerines'],
  ['Лесные птицы', '/forest_birds'],
  ['Певчие птицы', '/song_birds'],
  ['Хищные птицы', '/predator_birds'],
  ['Морские птицы', '/sea_birds']
];

const Header = ({ score }) => {
  return (
    <header>
      <div className="header_score">
        <div>Songbird</div>
        <div>Score: <span>{score}</span></div>
      </div>
      <div className="header_type-birds">
        {typeBirds.map((birds, index) => {
          const [type, link] = birds;
          return <TypeButton title={type} link={link} key={`${index.toString()}header`}/>
        })}
      </div>
    </header>
  )
}

export default Header;
