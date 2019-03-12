import React from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
  </View>
);

// Recebe o state do Redux
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
