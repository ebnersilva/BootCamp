import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Dimensions, TextInput, Image, ActivityIndicator
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Modal from 'react-native-modal';

import api from '../../services/api';

import styles from './styles';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default class Map extends Component {
  // State Inicial
  state = {
    modalVisible: false,
    region: null,
    username: '',
    latitudeTemp: '',
    longitudeTemp: '',
    users: [],
    loading: false,
  };

  // Renderizado quando o Map é montado
  async componentWillMount() {
    this.handleInitialLocation();
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  // Chama a modal
  handleGetCurrentPosition = (e) => {
    const { longitude, latitude } = e.nativeEvent.coordinate;
    this.setState({ latitudeTemp: latitude, longitudeTemp: longitude });
    this.setState({ modalVisible: true });
  };

  // Carrega as informações de localização do usuário
  handleInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // Sucesso
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922 * ASPECT_RATIO,
          },
        });
      },
      (error) => {
        console.log('Erro ao capturar as informações de localização!', error);
      }, // Erro
      {
        timeout: 10000, // Tempo máximo para buscar a localização no inicio
        enableHighAccuracy: false, // Pega a geolocalização pelo gps
        maximumAge: 2000, // Cache da localização guardada no caso em 1 segundo
      },
    );
  };

  handleAddUser = async () => {
    const {
      latitudeTemp, longitudeTemp, username, users,
    } = this.state;

    this.setState({ loading: true });

    try {
      const user = await this.checkUserExists(username);

      this.setState({
        users: [
          ...users,
          {
            user: user.data,
            coordinates: {
              latitude: latitudeTemp,
              longitude: longitudeTemp,
            },
          },
        ],
      });

      console.tron.log(users);

      this.handleRenderUsersMap();

      this.setState({ modalVisible: false, username: '' });
    } catch (error) {
      console.tron.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRenderUsersMap = () => {};

  render() {
    const {
      region, modalVisible, username, users, loading
    } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation
          loadingEnabled
          onLongPress={this.handleGetCurrentPosition}
        >
          {users.map(user => (
            <Marker style={{borderRadius: 10}} key={user.user.id} coordinate={user.coordinates} title={user.user.name}>
              <Image style={styles.imageMarker} source={{ uri: user.user.avatar_url }} />
            </Marker>
          ))}
        </MapView>

        <Modal
          isVisible={modalVisible}
          onSwipeComplete={() => this.setState({ modalVisible: false, username: '' })}
          swipeDirection="left"
          avoidKeyboard
        >
          <View style={styles.modalContainer}>
            <Text style={styles.titleModal}>Adicionar novo local</Text>
            <View style={styles.containerInputModal}>
              <TextInput
                onChangeText={text => this.setState({ username: text })}
                value={username}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário"
                style={styles.inputModal}
              />
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={styles.buttonModalCancel}
                onPress={() => this.setState({ modalVisible: false, username: '' })}
              >
                <Text style={{ color: 'white' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonModalSave} onPress={this.handleAddUser}>
                { loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={{ color: 'white' }}>Salvar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
