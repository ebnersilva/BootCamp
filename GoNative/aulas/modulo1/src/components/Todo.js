import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { toUnicode } from "punycode";

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Default Todo"
};

Todo.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({});

export default Todo;
