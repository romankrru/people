import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import People from './containers/People/People';

class App extends Component {
  render() {
    return (
      <Layout>
        <People />
      </Layout>
    );
  }
}

export default App;
