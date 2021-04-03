import React from 'react'
import './CardContainer.css';
import Card from '../FeedbackCard/FeedbackCard';
import {useSelector} from 'react-redux';

const CardContainer = () => {

  const pageCount = useSelector(store => {
    return store.count;
  })


  return (
    <>
      <main className='main'>
        <p>PAGE {pageCount} of 4</p>
        <div className='load-bar'></div>
        <Card />
      </main>
    </>
  )
}

export default CardContainer
