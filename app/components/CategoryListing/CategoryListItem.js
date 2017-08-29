import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import CONFIG from '../../constants';

class CategoryListItem extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  _pressRow(rowID: number) {
    this.props.navigation.navigate('ListBusinesses', this.props.category)
  }

  render() {
    let img = this.props.image;
    if (this.props.category.logo) {
      img = {uri:`${CONFIG.STATIC_URL}/category-logos/${this.props.category.logo}`};
    }

    return (
      <TouchableHighlight onPress={ () => this._pressRow(this.props.category.id) } underlayColor='rgba(0,0,0,0)'>
        <View style={ styles.row }>
          <Image style={ styles.thumb } source={ img } />
          <Text style={ styles.text }>
            { this.props.category.name }
          </Text>
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
    height: 120,
    /*backgroundColor: '#F6F6F6',*/
    alignItems: 'center',
    /*borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'*/
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    textAlign: 'center'
  }
});

export default CategoryListItem;
