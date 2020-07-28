import React, { useContext } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './header/header';
import { SongbirdContext } from './state';
import Main from './main/main';

function App() {
  const { state } = useContext(SongbirdContext);

  return (
    <BrowserRouter>
      <div className='wrapper-song-birds'>
        <Header score={state.score}/>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
