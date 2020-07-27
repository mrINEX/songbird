import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Header from './header/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <div className="app">
          разминка информация
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
