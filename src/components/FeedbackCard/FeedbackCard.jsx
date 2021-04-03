import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './FeedbackCard.css';
import Select from '../Select/Select';
import {useSelector} from 'react-redux';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#e7e6e1',
    marginTop: 40,
    margin: 'auto',
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function FeedbackCard() {

  const classes = useStyles();
  
  const question = useSelector(store => {
    return store.questions;
  })


  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          {question.feedback1}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Next</Button>
      </CardActions>
      <CardActions>
        <Select />
      </CardActions>
    </Card>
  );
}

export default FeedbackCard;
