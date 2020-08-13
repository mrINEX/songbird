import React, { useState, useContext, useMemo } from 'react';
import './main.scss';
import birdnone from '../assets/birdnone.jpg';
import BirdInfo from './bird-info.main';
import randomInteger from '../other/random';
import style from './main.module.scss';
import { SongbirdContext } from '../state';
import { useHistory } from "react-router-dom";
import correct from '../assets/audio/correct.mp3';
import error from '../assets/audio/error.mp3';
import Player from './player.main';

const Main = (props) => {
  const { typeBirds } = props;
  const { state, dispatch } = useContext(SongbirdContext);
  const history = useHistory();
  
  const [currentBirdClick, setCurrentBirdClick] = useState(null);
  const [topImage, setTopImage] = useState(birdnone);
  const [nameBird, setNameBird] = useState('*******');
  const [isNext, setIsNext] = useState('');
  const [handlerNext, setHandlerNext] = useState(false);
  const [score, setScore] = useState(5);

  function handler() {
    let level = state.modeAll.indexOf(history.location.pathname);
    dispatch({ type: 'set mode', value: state.modeAll[(level + 1) % 6] });
    history.push(state.modeAll[level + 1]);
  }

  const currentBirdGuess = useMemo(
    () => {
      setTopImage(birdnone);
      setNameBird('*******');
      setCurrentBirdClick(null);
      setIsNext('');
      setHandlerNext(false);
      setScore(5);
      return typeBirds[randomInteger(0, typeBirds.length - 1)];
    }, [typeBirds]
  );
  console.log('guess: ', currentBirdGuess);

  function handlerBirds(e) {
    setCurrentBirdClick(typeBirds[e.target.id - 1]);
    if(typeBirds[e.target.id - 1] === currentBirdGuess) {
      setTopImage(typeBirds[e.target.id - 1].image);
      setNameBird(typeBirds[e.target.id - 1].name);
      setIsNext(style['is-next']);
      setHandlerNext(true);
      dispatch({ type: 'set score', value: state.score += score });
      e.target.className = `${e.target.className} ${style['true-bird']}`;
      new Audio(correct).play();
      if ( history.location.pathname === '/sea_birds') {
        history.push('/');
        dispatch({ type: 'set screen', value: 'end-page' })
      }
    } else {
      setScore(score - 1);
      e.target.className = `${e.target.className} ${style['false-bird']}`;
      new Audio(error).play();
    }
  }

  return (
    <>
      <div className='main-top'>
        <div className='wrapper-top-image'>
          <img src={topImage} alt='bird-none' className='top-image'/>
        </div>
        <div className='top-details'>
          <div>{nameBird}</div>
          <hr />
          <audio className='top-player' src={currentBirdGuess.audio} controls/>
          {/* <Player src={currentBirdGuess.audio} /> */}
        </div>
      </div>
      <div className='main-center'>
        <div className='main-center__left'>
          {typeBirds.map((bird) => {
            return (
              <div className='left-bird' id={bird.id} onClick={handlerBirds} key={bird.name + 'bird'}>
                {bird.name}
              </div> 
            );
          })}
        </div>
        <div className='main-center__right'>
          <BirdInfo bird={currentBirdClick}/>
        </div>
      </div>
      <button className={`next-level ${isNext}`} onClick={handlerNext ? handler : () => {}}>Next level</button>
    </>
  )
}

export default Main;
