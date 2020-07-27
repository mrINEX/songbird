import React, { useReducer } from 'react';

const initPuzzle = {
  screen: 'main-page',
  mode: 'warm-up',
  data: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'set screen':
      return { ...state, screen: action.value };
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
