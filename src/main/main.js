import React, { useState, useContext, useMemo } from 'react';
import './main.scss';
import birdnone from '../assets/birdnone.jpg';
import BirdInfo from './bird-info.main';
import randomInteger from '../other/random';
import style from './main.module.scss';
import { SongbirdContext } from '../state';

const Main = (props) => {
  const { typeBirds } = props;
  const { state, dispatch } = useContext(SongbirdContext);
  
  const [currentBirdClick, setCurrentBirdClick] = useState(null);
  const [topImage, setTopImage] = useState(birdnone);
  const [nameBird, setNameBird] = useState('*******');
  const [isNext, setIsNext] = useState('');
  const [handlerNext, setHandlerNext] = useState();

  function handler() {
    return () => {
      console.log('next running');
    }
  }

  const currentBirdGuess = useMemo(
    () => {
      setTopImage(birdnone);
      setNameBird('*******');
      setCurrentBirdClick(null);
      setIsNext('');
      return typeBirds[randomInteger(0, typeBirds.length - 1)];
    }, [typeBirds]
  );
  console.log('here:', currentBirdGuess.name);

  function handlerBirds(e) {
    setCurrentBirdClick(typeBirds[e.target.id - 1]);
    if(typeBirds[e.target.id - 1] === currentBirdGuess) {
      setTopImage(typeBirds[e.target.id - 1].image);
      setNameBird(typeBirds[e.target.id - 1].name);
      setIsNext(style['true-bird']);
      setHandlerNext(handler);
      dispatch({ type: 'set score', value: state.score += 5 })
      e.target.className = `${e.target.className} ${style['true-bird']}`;
    } else {
      e.target.className = `${e.target.className} ${style['false-bird']}`;
    }
  }

  return (
    <>
      <div className='main-top'>
        <img src={topImage} alt='bird-none' className='top-image'/>
        <div className='top-details'>
          <div>{nameBird}</div>
          <hr />
          <div>
            <audio className='top-player' src={currentBirdGuess.audio} controls autoPlay/>
          </div>
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
      <button className={`next-level ${isNext}`} onClick={handlerNext}>Next level</button>
    </>
  )
}

export default Main;
