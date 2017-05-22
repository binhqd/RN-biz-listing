import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

class MenuComponent extends React.Component {
  render() {
    return (
      <View style={ { flex: 1, backgroundColor: '#ededed', paddingTop: 50 } }>
        <Text>This is Menu!</Text>
      </View>
      );
  }
}

let styles = StyleSheet.create({

});

export default MenuComponent;