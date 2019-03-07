import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Default Todo',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
