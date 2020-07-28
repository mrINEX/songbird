import React, { useReducer } from 'react';
import birds from './assets/data.birds';

const initPuzzle = {
  screen: 'main-page',
  mode: '/warm-up',
  modeAll: ['/warm-up', '/passerines', '/forest_birds', '/song_birds', '/predator_birds', '/sea_birds'],
  isNext: false,
  score: 0,
  data: birds
};

function reducer(state, action) {
  switch (action.type) {
    case 'set next':
      return { ...state, isNext: action.value };
    case 'set screen':
      return { ...state, screen: action.value };
    case 'set score':
      return { ...state, score: action.value };
    case 'set mode':
      return { ...state, mode: action.value };
    case 'set data':
      return { ...state, data: action.value };
    default:
      return state;
  }
}

const SongbirdContext = React.createContext(initPuzzle);

const SongbirdContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initPuzzle);

  return (
    <SongbirdContext.Provider value={{ state, dispatch }}>
      { children }
    </SongbirdContext.Provider>
  );
};

export { SongbirdContext, SongbirdContextProvider };
