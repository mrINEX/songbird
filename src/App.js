import React, { useContext } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './header/header';
import { SongbirdContext } from './state';
import Main from './main/main';

function App() {
  const { state, dispatch } = useContext(SongbirdContext);

  function handlerAgain() {
    dispatch({ type: 'set score', value: 0 });
    dispatch({ type: 'set screen', value: 'main-page' });
    dispatch({ type: 'set mode', value: "/warm-up" });
  }

  return (
    <BrowserRouter>
      <div className='wrapper-song-birds'>
        <Header score={state.score}/>
        { state.screen === 'end-page' &&
          <div className='wrapper-result-score'>
            <p className='result-score-message'>
              Вы набрали <span style={{color: 'cadetblue'}}>{state.score}</span> баллов из <span style={{color: 'cadetblue'}}>30</span> возможных.
            </p>
            { state.score > 29 && 
            <p className='result-score-win-message'>
              Поздравляем!<br /> 
              Игра окончена.<br /> 
              <span style={{fontSize: '50px', color: 'cadetblue'}}>Теперь ты знаешь кто чирикнул</span>
            </p>}
            <button onClick={handlerAgain} className='result-score-button'>пройти викторину ещё раз</button>
          </div>
        }
        { state.screen === 'main-page' &&
          <Switch>
            <Route exact path="/warm-up">
              <Main typeBirds={state.data[0]} />
            </Route>
            <Route exact path="/passerines">
              <Main typeBirds={state.data[1]} />
            </Route>
            <Route exact path="/forest_birds">
              <Main typeBirds={state.data[2]} />
            </Route>
            <Route exact path="/song_birds">
              <Main typeBirds={state.data[3]} />
            </Route>
            <Route exact path="/predator_birds">
              <Main typeBirds={state.data[4]} />
            </Route>
            <Route exact path="/sea_birds">
              <Main typeBirds={state.data[5]} />
            </Route>
            <Redirect to={"/warm-up"} />
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
