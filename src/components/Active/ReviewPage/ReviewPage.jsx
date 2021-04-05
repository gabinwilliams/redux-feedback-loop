import { useState } from "react";
import axios from 'axios';
import "./ReviewPage.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f2a154",
    marginTop: 40,
    margin: "auto",
    minWidth: 275,
    maxWidth: 500,
  },

  title: {
    fontSize: 14,
  },
});

const ReviewPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const feedback = useSelector((store) => {
    return store.feedback;
  });

  const pageCount = useSelector((store) => {
    return store.count;
  });

  const handleClick = () => {
    dispatch({ type: "count++", payload: pageCount });

    // POST to the server
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: feedback.feeling,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments,
      },
    })
      .then((response) => {
        console.log(response);
        // resets feedback obj state to empty obj
        dispatch({ type: "reset", payload: feedback });
        // send you back to the home page
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  return (
    <>
      <div className="main">
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Typography variant="h4" component="p">
              Feedback Summary
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Page5">
              <Button onClick={handleClick} size="small">
                Submit
              </Button>
            </Link>
          </CardActions>
        </Card>

        <h4>Feelings: {feedback.feeling}</h4>
        <h4>Understanding: {feedback.understanding}</h4>
        <h4>Support: {feedback.support}</h4>
        <h4>Comments: {feedback.comments}</h4>
      </div>
    </>
  );
};

export default ReviewPage;
