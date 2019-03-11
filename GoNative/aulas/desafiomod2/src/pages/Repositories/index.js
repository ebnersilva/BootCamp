import React, { Component } from 'react';
import {
  View, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    const { repositoryInput } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header title="Repositórios" />
        <View style={styles.form}>
          <View style={styles.containerInput}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              style={styles.formInput}
              placeholderTextColor={styles.placeholderColor.color}
              value={repositoryInput}
              onChangeText={text => this.setState({ repositoryInput: text })}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon name="plus" size={20} style={styles.formIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
