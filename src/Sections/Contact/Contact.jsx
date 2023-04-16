import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off"background-color="red">
      <TextField id="name" label="Name" variant="outlined"color='secondary' required /><br></br>
      <TextField id="email" label="Email" variant="outlined" required /><br></br>
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
      /><br></br>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => alert('Form submitted')}
      >
        Send
      </Button>
    </form>
  );
}
