import React, {Component} from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZWJuZXJkZWF0aCIsImEiOiJjanA4aGJyNTkxNHBuM3JxajB2ajJsdXB5In0.nLW_k2u_mbv2ytZxPbuICA');

export default class App extends Component {
  state = {
    user: {
      latitude = 0,
      longitude = 0,
    }
  }

  renderAnnotations () {
    return (
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[-49.372980, -25.554312]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Ponto fixo no mapa' />
      </Mapbox.PointAnnotation>
    )
  }

  _onLongPress(e) {
    const [latitudeActual, longitudeActual] = e.geometry.coordinates;

    this.setState(
      {
        user: {latitude: latitudeActual, longitude: longitudeActual
      }
    });

    const { latitude, longitude } = this.state.user;

    //console.log(latitude, longitude);
  }

  componentDidMount(){
    PermissionsAndroid.requestMultiple(
              [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
              {
                  title: 'Permissão de Localização',
              message: 'O App precisa de permissão de localização para encontrar sua posição'
          }
      ).then(granted => {
          //console.log(granted);
          resolve();
      }).catch(err => {
          //console.warn(err);
          //reject(err);
      });
  }

  render() {
    return (
      <Mapbox.MapView
        onLongPress={this._onLongPress}
        styleURL={Mapbox.StyleURL.Dark}
        zoomLevel={15}
        centerCoordinate={[-49.6451598, -27.2177659]}
        style={styles.container}
      >

      </Mapbox.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  },
});
