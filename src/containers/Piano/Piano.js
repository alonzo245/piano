import React, { Component } from 'react';
import PianoKey from '../../components/PianoKey/PianoKey';
import CurrentNote from '../../components/CurrentNote/CurrentNote';
import classes from './Piano.module.scss';

class Piano extends Component {
  state = {
    pressedKey: null,
    pianoKeys: [
      { noteName: 'A', isSharp: false, frequency: 27.500 },
      { noteName: 'A#', isSharp: true, frequency: 29.135 },
      { noteName: 'B', isSharp: false, frequency: 30.867 },
      { noteName: 'C', isSharp: false, frequency: 32.703 },
      { noteName: 'C#', isSharp: true, frequency: 34.647 },
      { noteName: 'D', isSharp: false, frequency: 36.708 },
      { noteName: 'D#', isSharp: true, frequency: 38.890 },
      { noteName: 'E', isSharp: false, frequency: 41.203 },
      { noteName: 'F', isSharp: false, frequency: 43.653 },
      { noteName: 'F#', isSharp: true, frequency: 46.249 },
      { noteName: 'G', isSharp: false, frequency: 48.999 },
      { noteName: 'G#', isSharp: true, frequency: 51.913 },
      { noteName: 'A', isSharp: false, frequency: 55.000 },
      { noteName: 'A#', isSharp: true, frequency: 58.270 },
      { noteName: 'B', isSharp: false, frequency: 61.735 },
    ]
  };

  playTestInstrument() {
    this.midiSounds.playChordNow(3, [60], 2.5);
  }

  handleOnMousePress = (keyName, frequency) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + 0.1);

    this.setState({
      ...this.state,
      pressedKey: keyName
    });
  };

  render() {
    return (
      <React.Fragment>
        <ol className={classes.Piano}>
          {this.state.pianoKeys.map((pkeyData, i) =>
            <PianoKey
              key={i}
              pkeyData={pkeyData}
              OnMousePress={this.handleOnMousePress}
            />
          )}
        </ol>
        <CurrentNote pressedKey={this.state.pressedKey} />
      </React.Fragment>
    );
  };
};

export default Piano;