import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pageCount = useSelector((store) => {
    return store.count;
  })

  const [rating, setRating] = useState('');

  const handleChange = (event) => {
    setRating(event.target.value)

    if(pageCount === 1) {

      dispatch({type: 'updateFeeling', payload: event.target.value})
    }
    if(pageCount === 2) {

      dispatch({type: 'updateUnderstanding', payload: event.target.value})
    }
    if(pageCount === 3) {

      dispatch({type: 'updateSupport', payload: event.target.value})
    }
    
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          
          value={rating}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

    </div>
     
  )

}