import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Fazer café"
      },
      {
        id: 2,
        text: "Estudar GoNative"
      }
    ],
    counter: 0
  };

  handleAddTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo Todo" }]
    });
  };

  // Quando o componente é renderizado
  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "Hello World" });
    }, 3000);
  }

  // Executado antes do componentDidMount quanto antes de cada atualização
  // nextProps: proximo valor atualizado, prevState: state atual antes de atualizar
  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  // Executado a cada atualização antes mesmo do componente atualizar
  // nextProps: , nextState:
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5; //Aqui só renderizará no valor menor que 5 mas no state será atualizado
  }
  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // Executado após que o state e o render são efetuados
  // Conseguimos pegar as props e os estados antes de ser atualizado
  componentDidUpdate(prevProps, prevState) {
    // Código
  }

  // Executado quando o componente será desmontado
  componentWillUnmount() {
    //Código
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button onPress={this.handleAddTodo} title="Add Todo" />
        <Button onPress={this.handleAddCounter} title="Add Counter" />
        <Text>{this.state.counter}</Text> */}

        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    margin: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    transform: [{ rotateZ: "20deg" }]
  }
});
