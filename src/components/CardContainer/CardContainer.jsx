import React from 'react'
import './CardContainer.css';
import FeedbackCard1 from '../FeedbackCard/FeedbackCard1';
import FeedbackCard2 from '../FeedbackCard/FeedbackCard2';
import FeedbackCard3 from '../FeedbackCard/FeedbackCard3';
import FeedbackCard4 from '../FeedbackCard/FeedbackCard4';
import {useSelector} from 'react-redux';

const CardContainer = () => {

  const pageCount = useSelector(store => {
    return store.count;
  })

  const cardToUse = () => {
    if(pageCount === 1) {
      return (<FeedbackCard1 />)
    }
    if(pageCount === 2) {
      return (<FeedbackCard2 />)
    }
    if(pageCount === 3) {
      return (<FeedbackCard3 />)
    }
    if(pageCount === 4) {
      return (<FeedbackCard4 />)
    }
  }


  return (
    <>
      <main className='main'>
        <p>PAGE {pageCount} of 4</p>
        <div className='load-bar'></div>
        {cardToUse()}
      </main>
    </>
  )
}

export default CardContainer
