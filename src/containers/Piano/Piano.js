import React, { Component } from 'react';
import PianoKey from '../../components/PianoKey/PianoKey';
import CurrentKey from '../../components/CurrentKey/CurrentKey';
import classes from './Piano.module.scss';

class Piano extends Component {
  state = {
    pressedKey: null,
    pianoKeys: [
      { noteName: 'A', isSharp: false, frequency: 27.500000000000000 },
      { noteName: 'A#', isSharp: true, frequency: 29.135235094880619 },
      { noteName: 'B', isSharp: false, frequency: 30.867706328507756 },
      { noteName: 'C', isSharp: false, frequency: 32.703195662574829 },
      { noteName: 'C#', isSharp: true, frequency: 34.647828872109012 },
      { noteName: 'D', isSharp: false, frequency: 36.708095989675945 },
      { noteName: 'D#', isSharp: true, frequency: 38.890872965260113 },
      { noteName: 'E', isSharp: false, frequency: 41.203444614108741 },
      { noteName: 'F', isSharp: false, frequency: 43.653528929125485 },
      { noteName: 'F#', isSharp: true, frequency: 46.249302838954299 },
      { noteName: 'G', isSharp: false, frequency: 48.999429497718661 },
      { noteName: 'G#', isSharp: true, frequency: 51.913087197493142 },
      { noteName: 'A', isSharp: false, frequency: 55.000000000000000 },
      { noteName: 'A#', isSharp: true, frequency: 58.270470189761239 },
      { noteName: 'B', isSharp: false, frequency: 61.735412657015513 },
    ]
  }

  HandleOnMousePress = (keyName) => {
    this.setState({
      ...this.state,
      CurrentKey: keyName
    })
  }

  render() {
    return (
      <React.Fragment>
        <ol className={classes.Piano}>
          {this.state.pianoKeys.map((pkeyData, i) =>
            <PianoKey
              key={i}
              pkeyData={pkeyData}
              OnMousePress={this.HandleOnMousePress}
            />
          )}
        </ol>
        <CurrentKey pressedKey={this.state.CurrentKey} />
      </React.Fragment>
    );
  };
};

export default Piano;