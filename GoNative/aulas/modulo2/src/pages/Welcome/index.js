import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage
} from 'react-native';

import styles from './styles';
import api from '~/services/api';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (error) {
      console.tron.log('Usuário inexistente');
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do Github
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
