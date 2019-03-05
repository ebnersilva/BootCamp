import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
        <Todo title="Fazer Café" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
