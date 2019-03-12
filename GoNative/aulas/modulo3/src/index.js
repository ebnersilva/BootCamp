import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from '~/components/TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => (
  <View style={styles.container}>
    <TodoList />
  </View>
);

export default App;
