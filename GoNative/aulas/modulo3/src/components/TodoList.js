import React, { Component } from 'react';

import { Text } from 'react-native';

// import styles from './styles';

export default class TodoList extends Component {
  state = {
    inputValue: 'Olá',
  };

  render() {
    const { inputValue } = this.state;
    return <Text>{inputValue}</Text>;
  }
}
