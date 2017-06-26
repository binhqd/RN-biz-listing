import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import Dimensions from 'Dimensions';
import CONFIG from '../../constants';
let width = Dimensions.get('window').width;

// We can use this to make the overlay fill the entire width
class PromotionListItem extends React.Component {

  _pressRow(rowID: number) {
    this.props.navigation.navigate('PromotionDetail', {
      categoryId: 'Lucy'
    })
  }

  render() {
    let img = this.props.image;
    if (this.props.promotion.banner) {
      img = {uri:`${CONFIG.STATIC_URL}/${this.props.promotion.banner.container}/${this.props.promotion.banner.name}`};
    }

    return (
      <TouchableHighlight onPress={ () => this._pressRow(this.props.promotion.id) } underlayColor='rgba(0,0,0,0)'>
        <View style={ styles.row }>
          <Image style={ styles.thumb } source={ img } />

          <View style={styles.overlay}>
            <Text style={ styles.title }>
              { this.props.promotion.title }
            </Text>
            <Text style={ styles.description }>
              { this.props.promotion.description }
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
}

PromotionListItem.propTypes = {
  promotion: PropTypes.object
}


let styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    height: 170,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderRadius: 2,
    borderColor: '#CCC',
    position: 'relative',
    marginBottom: 5
  },
  thumb: {
    flex: 1,
    height: 150,
    width: width
  },
  title: {
    flex: 0.4,
    color: '#eee',
    fontWeight: 'bold'
  },
  description: {
    flex: 0.6,
    color: '#ddd'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    left: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#000',
    width:width,
    height: 80,
    padding: 10
  }
});

export default PromotionListItem;
