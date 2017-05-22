import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';

class BizGMap extends React.Component {
  render() {
    return (
      <View style={ styles.mapContainer }>
        <MapView style={ styles.map } region={ { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } } />
      </View>
      );
  }
}

var styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default BizGMap;