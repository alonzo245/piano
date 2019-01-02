import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import Piano from './containers/Piano/Piano';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <Piano />
      </Layout>
    );
  }
}

export default App;
