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


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'center',
    backgroundColor: '#f2a154',
    textAlign: 'center',
    marginTop: 40,
    margin: 'auto',
    minHeight: 250,
    minWidth: 275,
    maxWidth: 500
  },
   
  
});

 function FeedbackCard4() {

  
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
   

    dispatch({type: 'count++', payload: pageCount})
    
    dispatch({type: 'page4', payload: question})    
  }


  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="p">
          {question.feedback}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = '/page4'>
          <Button onClick={handleClick} size="small">Next</Button>
        </Link>
      </CardActions>
      <CardActions>
        <TextField />
      </CardActions>
    </Card>
  );
}

export default FeedbackCard4;