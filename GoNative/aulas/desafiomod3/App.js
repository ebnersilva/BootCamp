import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid
} from "react-native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        ],
        {
          title: "Permissão de Localização",
          message:
            "O App precisa de permissão de localização para encontrar sua posição"
        }
      )
        .then(granted => {
          //console.log(granted);
          resolve();
        })
        .catch(err => {
          //console.warn(err);
          //reject(err);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -27.210753,
            longitude: -49.644183,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}
