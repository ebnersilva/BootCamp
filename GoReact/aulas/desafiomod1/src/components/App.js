import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  render() {
    const { posts } = this.state;
    return <h1>Olá Mundo</h1>;
  }
}
