import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import TypeButton from './components/typebutton.header';

const typeBirds = [
  ['Разминка', '/warm-up'],
  ['Воробьиные', '/passerines'],
  ['Лесные птицы', '/forest_birds'],
  ['Певчие птицы', '/song_birds'],
  ['Хищные птицы', '/predator_birds'],
  ['Морские птицы', '/sea_birds']
];

function App() {
  return (
    <BrowserRouter>
      <header>
        <div>Songbird</div>
        <div>Score: <span>0</span></div>
        {typeBirds.map((birds, index) => {
          const [type, link] = birds;
          return <TypeButton title={type} link={link}/>
        })}
      </header>
      <Switch>
        <div className="App">
          разминка информация
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
