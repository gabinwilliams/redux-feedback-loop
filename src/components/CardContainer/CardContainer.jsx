import React from 'react'
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = () => {
  return (
    <>
      <main className='main'>
        <p>PAGE 1 of 4</p>
        <div className='load-bar'></div>
        <Card />
      </main>
    </>
  )
}

export default CardContainer
