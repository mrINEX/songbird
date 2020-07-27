import React, { useReducer } from 'react';

const initPuzzle = {
  screen: 'start-page',
  mode: 'image and words',
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

const PuzzleContext = React.createContext(initPuzzle);

const PuzzleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initPuzzle);

  return (
    <PuzzleContext.Provider value={{ state, dispatch }}>
      { children }
    </PuzzleContext.Provider>
  );
};

export { PuzzleContext, PuzzleContextProvider };
