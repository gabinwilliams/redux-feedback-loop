import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function MultilineTextFields() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
   
      setValue(event.target.value);

      dispatch({type: 'updateComment', payload: event.target.value})
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
       
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          onChange={handleChange}
          multiline
          value={value}
          rows={5}
          variant="outlined"
        />
      </div>
    </form>
  );
}