import './config/ReactotronConfig';

import React, { Component } from 'react';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    count: 1,
  };

  componentDidMount() {
    this.setState({
      count: 2,
    });
  }

  render() {
    const { count } = this.state;
    const Routes = createNavigator();
    return <Routes />;
  }
}
