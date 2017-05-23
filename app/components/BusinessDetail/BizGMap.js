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
    height: 300,
    width: 400,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    marginTop: 10,
    marginBottom: 10
  },
  map: {

  }
});

export default BizGMap;