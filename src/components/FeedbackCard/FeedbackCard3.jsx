import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "../Select/Select";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
    backgroundColor: "#f2a154",
    textAlign: "center",
    marginTop: 40,
    margin: "auto",
    minHeight: 250,
    minWidth: 275,
    maxWidth: 500,
  },
});

function FeedbackCard3() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const question = useSelector((store) => {
    return store.questions;
  });

  const feedback = useSelector((store) => {
    return store.feedback;
  });
// renders the next button once feedback has been provided
  const renderButton = () => {
    if (feedback.support > 0) {
      return (
        <Link to="/page4">
          <Button onClick={handleClick} size="small">
            Next
          </Button>
        </Link>
      );
    }
  };

  const pageCount = useSelector((store) => {
    return store.count;
  });


  const handleClick = () => {
    dispatch({ type: "count++", payload: pageCount });
    dispatch({ type: "page4", payload: question });
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="p">
          {question.feedback}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Select />
      </CardActions>
      <CardActions>{renderButton()}</CardActions>
    </Card>
  );
}

export default FeedbackCard3;
