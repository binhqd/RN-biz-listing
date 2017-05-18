import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class List extends React.Component {
  static navigationOptions = {
    title: 'List Business',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Home', { user: 'Lucy' })}
          title="Back to Home"
        />
      </View>
    );
  }
}

export default List;