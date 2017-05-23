import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class MenuComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let dump = list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ];

    this.state = {
      menuItems: dump
    }
  }
  render() {
    return (
      <View style={ styles.sideMenu }>
        <View style={ styles.header }>
          <Text>This is Menu!</Text>
        </View>
        <List containerStyle={ styles.menuContainer }>
          { this.state.menuItems.map((l, i) => (
              <ListItem roundAvatar avatar={ { uri: l.avatar_url } } key={ i } title={ l.name } />
            )) }
        </List>
      </View>
      );
  }
}

let styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'column'
  },
  header: {
    height: 100,
    backgroundColor: '#0000ff'
  },
  menuContainer: {
    marginBottom: 20
  }
});

export default MenuComponent;