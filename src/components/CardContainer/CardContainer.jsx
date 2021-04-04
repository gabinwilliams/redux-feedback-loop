import React from "react";
import "./CardContainer.css";
import FeedbackCard1 from "../FeedbackCard/FeedbackCard1";
import FeedbackCard2 from "../FeedbackCard/FeedbackCard2";
import FeedbackCard3 from "../FeedbackCard/FeedbackCard3";
import FeedbackCard4 from "../FeedbackCard/FeedbackCard4";
import FeedbackCard5 from "../FeedbackCard/FeedbackCard5";
import ReviewPage from '../Active/ReviewPage/ReviewPage';
import { useSelector } from "react-redux";

const CardContainer = () => {
  const pageCount = useSelector((store) => {
    return store.count;
  });
// renders a different card according to the current page
  const cardToUse = () => {
    if (pageCount === 1) {
      return <FeedbackCard1 />;
    }
    if (pageCount === 2) {
      return <FeedbackCard2 />;
    }
    if (pageCount === 3) {
      return <FeedbackCard3 />;
    }
    if (pageCount === 4) {
      return <FeedbackCard4 />;
    }
    if (pageCount === 5) {
      return <ReviewPage />;
    }

    if (pageCount === 6) {
      return <FeedbackCard5 />;
    }
  };

  return (
    <>
      <main className="main">
        <p>PAGE {pageCount} of 6</p>
        <div className="load-bar"></div>
        {cardToUse()}
      </main>
    </>
  );
};

export default CardContainer;
