import React from 'react';
import classes from './CurrentKey.module.scss';

const CurrentKey = (props) => (
  <div className={classes.CurrentKey}>
    {props.pressedKey}
  </div>
);

export default CurrentKey;