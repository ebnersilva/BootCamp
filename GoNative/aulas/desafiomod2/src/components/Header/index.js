import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StatusBar } from 'react-native';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}

export default withNavigation(Header);
