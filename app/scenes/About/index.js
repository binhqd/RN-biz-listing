import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import {LayoutWithSideBar} from '../../components/layouts';

class About extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Giới Thiệu',
      headerRight: (
      <Icon
            name='bars'
            type='font-awesome'
            color='#000'
            iconStyle={{
              marginRight: 20
            }}
            onPress={ () => state.params.handleMenuToggle() } />

      )
    };
  };

  constructor() {
    super()

    this.state = {

    };

  }

  render() {
    const {navigate} = this.props.navigation;
    const htmlContent = `<h1>Giới Thiệu</h1>
    <p><a href="http://mysite.com">&hearts; nice job!</a></p>`;

    return (
      <LayoutWithSideBar navigation={this.props.navigation}>
        <View>
            <HTMLView
                value={htmlContent}
                stylesheet={styles}
              />
        </View>
      </LayoutWithSideBar>
      );
  }
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});

export default About;
