import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

 function FeedbackCard2() {

  
  const dispatch = useDispatch();

  const classes = useStyles();

  const question = useSelector(store => {
    return store.questions;
  })

  const currentPage = useSelector(store => {
    return store.currentPage;
  })


  const pageCount = useSelector(store => {
    return store.count;
  })

 
  // const [feedback, setFeedback] = useState('');

  const handleClick = () => {
   

    dispatch({type: 'count++', payload: pageCount})
    // dispatch({type: 'page2', payload: currentPage}) 
    dispatch({type: 'page3', payload: question})    
  }


  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          {question.feedback}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = '/page3'>
          <Button onClick={handleClick} size="small">Next</Button>
        </Link>
      </CardActions>
      <CardActions>
        <Select />
      </CardActions>
    </Card>
  );
}

export default FeedbackCard2;
