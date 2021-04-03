import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../TextField/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './FeedbackCard.css';
import Select from '../Select/Select';
import { Link, Router, Rout } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import 'fontsource-roboto';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#f2a154',
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

 function FeedbackCard5() {

  
  const dispatch = useDispatch();

  const classes = useStyles();

  const question = useSelector(store => {
    return store.questions;
  })

  const feedback = useSelector(store => {
    return store.feedback;
  })

  


  const pageCount = useSelector(store => {
    return store.count;
  })

 


  const handleClick = () => {
   

    dispatch({type: 'countZero', payload: pageCount})
    
    dispatch({type: 'page1', payload: question})    
  }


  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="p">
          Thank you!!
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = '/'>
          <Button onClick={handleClick} size="large">Leave New Feedback</Button>
        </Link>
      </CardActions>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

export default FeedbackCard5;