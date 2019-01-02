import React from 'react';
import classes from './PianoKey.module.scss';

const PianoKey = (props) => (
  <li
    className={props.pkeyData.isSharp ? classes.Sharp : null}
    onClick={() => props.OnMousePress(props.pkeyData.noteName)}
  >
    {props.tone}
  </li>
);

export default PianoKey;