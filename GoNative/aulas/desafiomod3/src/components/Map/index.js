import React, { Component } from "react";
import { Platform, View, PermissionsAndroid } from "react-native";
import MapView from "react-native-maps";

export default class Map extends Component {
  state = {
    region: null
  };

  componentDidMount() {
    this.handleInitialLocation();
  }

  handleInitialLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // Sucesso
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      },
      () => {}, // Erro
      {
        timeout: 2000, // Tempo máximo para buscar a localização no inicio
        enableHighAccuracy: true, // Pega a geolocalização pelo gps
        maximumAge: 1000 // Cache da localização guardada no caso em 1 segundo
      }
    );
  }

  render() {
    const { region } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}
