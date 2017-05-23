import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';

class BizGMap extends React.Component {
  render() {
    if (typeof this.props.lat != 'undefined' && typeof this.props.lng != 'undefined') {
      return (
        <View style={ styles.mapContainer }>
          <MapView style={ styles.map } region={ {
                                                   latitude: this.props.lat,
                                                   longitude: this.props.lng
                                                 } } />
        </View>
        );
    } else {
      return null;
    }
  }
}

var styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    width: 400,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  map: {

  }
});

export default BizGMap;