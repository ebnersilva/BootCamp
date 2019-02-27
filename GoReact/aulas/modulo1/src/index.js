import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  //Chamadas a Api, listagem etc, Iniciar EventListeners
  componentDidMount() {}

  //Intermediador da modificação do state e renderização na tela
  //Troca o estado mas podemos bloquear a renderização
  shouldComponentUpdate(nextProps, nextState) {}

  //Executa depois de sofrer atualização do state e da renderização
  componentDidUpdate(prevProps, prevState) {}

  //Ouvindo uma digitação ou resize de janela
  componentWillUnmount() {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello RocketSeat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
