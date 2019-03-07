import './config/ReactotronConfig';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import Todo from '~/components/Todo';

const bgColor = '#f00';
const bgColor1 = '#333';

const styles = StyleSheet.create({
  box: {
    backgroundColor: bgColor,
    height: 80,
    margin: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    transform: [{ rotateZ: '20deg' }],
    width: 80,
  },
  container: {
    alignContent: 'center',
    backgroundColor: bgColor1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    })
  }
});

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: 'Fazer café',
      },
      {
        id: 2,
        text: 'Estudar GoNative',
      },
    ],
    counter: 0,
  };

  // Quando o componente é renderizado
  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Hello World' });
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
    return nextState.counter < 5;
    // Aqui só renderizará no valor menor que 5 mas no state será atualizado
  }

  // Executado após que o state e o render são efetuados
  // Conseguimos pegar as props e os estados antes de ser atualizado
  componentDidUpdate(prevProps, prevState) {
    // Código
  }

  // Executado quando o componente será desmontado
  componentWillUnmount() {
    // Código
  }

  handleAddTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: Math.random(), text: 'Novo Todo' }],
    });
  };

  handleAddCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button onPress={this.handleAddTodo} title="Add Todo" />
        <Button onPress={this.handleAddCounter} title="Add Counter" />
        <Text>{this.state.counter}</Text> */}

        { Platform.OS === 'ios' ? <Text style={styles.text}>IOS</Text> : <Text style={styles.text}>Android</Text>}

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
