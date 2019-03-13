import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  state = {
    textInitial: 'Hello World',
  };

  render() {
    const { textInitial } = this.state;
    return (
      <View style={styles.container}>
        <Text>{textInitial}</Text>
      </View>
    );
  }
}
