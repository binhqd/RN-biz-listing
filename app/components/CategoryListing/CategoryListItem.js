import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';

class CategoryListItem extends React.Component {

  _pressRow(rowID: number) {
    this.props.navigation.navigate('ListBusinesses', {
      categoryId: 'Lucy'
    })
  }

  render() {
    let imgSource = {
      uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png'
    }
    return (
      <TouchableHighlight onPress={ () => this._pressRow(1) } underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={ styles.row }>
            <Image style={ styles.thumb } source={ imgSource } />
            <Text style={ styles.text }>
              { this.props.category.name }
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
}


let styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  }
});

export default CategoryListItem;