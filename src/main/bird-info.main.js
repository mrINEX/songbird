import React from 'react';

const BirdInfo = ({ bird }) => {
  if(!bird) {
    return <p>Послушайте плеер.
    Выберите птицу из списка</p>
  }
  return (
    <>
      <div className='bird-info-head'>
        <div className='wrapper-top-image'>
          <img src={bird.image} alt='current-click-bird' className='current-click-image'/>
        </div>
        <div className='current-click-info'>
          <div>{bird.name}</div>
          <hr />
          <div>{bird.species}</div>
          <hr />
          <audio className='top-player' src={bird.audio} controls/>
        </div>
      </div>
      <div>
        <p>{bird.description}</p>
      </div>
    </>
  );
}

export default BirdInfo;
