import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import Piano from './containers/Piano/Piano';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <Piano />
        <div>
          <a
            style={{
              color: 'black',
              textDecoration: 'underline'
            }}
            href="https://github.com/alonzo245/piano">
            GitHub Code
        </a>
        </div>
      </Layout>
    );
  }
}

export default App;
