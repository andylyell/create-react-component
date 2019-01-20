import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ControlPanel from './components/ControlPanel/ControlPanel';
import OutputCodeBlock from './components/OutputCodeBlock/OutputCodeBlock';
// import Button from './components/UI/Button/Button';

class App extends Component {
  render() {
    return (
      <Layout>
        <ControlPanel/>
        <OutputCodeBlock/>
      </Layout>
    );
  }
}

export default App;
