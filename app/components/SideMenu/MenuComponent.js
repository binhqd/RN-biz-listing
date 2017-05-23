import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class MenuComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let dump = require('../../dump/dumpCategories');

    let imgSources = [];

    imgSources.push(require('../../dump/logos/1.png'));
    imgSources.push(require('../../dump/logos/2.png'));
    imgSources.push(require('../../dump/logos/3.png'));
    imgSources.push(require('../../dump/logos/4.png'));
    imgSources.push(require('../../dump/logos/5.png'));
    imgSources.push(require('../../dump/logos/6.png'));
    imgSources.push(require('../../dump/logos/7.png'));
    imgSources.push(require('../../dump/logos/8.png'));
    imgSources.push(require('../../dump/logos/9.png'));
    imgSources.push(require('../../dump/logos/10.png'));
    imgSources.push(require('../../dump/logos/11.png'));
    imgSources.push(require('../../dump/logos/12.png'));
    imgSources.push(require('../../dump/logos/13.png'));
    imgSources.push(require('../../dump/logos/14.png'));
    imgSources.push(require('../../dump/logos/15.png'));
    imgSources.push(require('../../dump/logos/16.png'));
    imgSources.push(require('../../dump/logos/17.png'));
    imgSources.push(require('../../dump/logos/18.png'));
    imgSources.push(require('../../dump/logos/19.png'));
    imgSources.push(require('../../dump/logos/20.png'));
    imgSources.push(require('../../dump/logos/21.png'));



    this.state = {
      menuItems: dump.categories,
      images: imgSources
    }
  }

  _pressRow(rowID: number) {
    this.props.navigation.navigate('ListBusinesses', {
      categoryId: 'Lucy'
    })
  }
  
  render() {
    return (
      <View style={ styles.sideMenu }>
        <View style={ styles.header }>
          <Text>This is Menu!</Text>
        </View>
        <ScrollView>
        <List containerStyle={ styles.menuContainer }>
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
