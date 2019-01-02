import React from 'react';
import classes from './CurrentNote.module.scss';

const CurrentNote = (props) => (
  <div className={classes.CurrentNote}>
    {props.pressedKey}
  </div>
);

export default CurrentNote;