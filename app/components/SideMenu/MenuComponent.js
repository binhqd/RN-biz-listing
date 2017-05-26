import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class MenuComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let dump = require('../../dump/dumpCategories');


    let imgSources = require('../../dump/logos');

    this.state = {
      menuItems: dump.categories,
      images: imgSources
    }
  }

  _pressRow(rowID: number) {
    this.props.navigation.navigate('ListBusinesses', {
      categoryId: 'Lucy'
    });
  }

  gotoAbout() {
    this.props.navigation.navigate('About')
  }

  render() {
    return (
      <View style={ styles.sideMenu }>
        <View style={ styles.header }>
          <Text>This is Menu!</Text>
        </View>
        <ScrollView>
        <List containerStyle={ styles.menuContainer }>
          <ListItem  onPress={ this.gotoAbout.bind(this) } title='Giới thiệu' />
          <ListItem  onPress={ () => this._pressRow(1) } title='Tin khuyến mãi' />
          { this.state.menuItems.map((l, i) => {
              let imgSource = this.state.images[Math.floor(Math.random()*this.state.images.length)];
              return (
                <ListItem  roundAvatar avatar={ imgSource } onPress={ () => this._pressRow(1) } key={ i } title={ l.name } />
              )
            }) }
        </List>
        </ScrollView>
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
