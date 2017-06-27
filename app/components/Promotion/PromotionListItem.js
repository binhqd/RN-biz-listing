import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import Dimensions from 'Dimensions';
import CONFIG from '../../constants';
import { ShowIf } from '../utils';
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
      <View style={styles.itemContainer}>
        <ShowIf condition={true}>
          <TouchableHighlight onPress={ () => this._pressRow(this.props.promotion.id) } underlayColor='rgba(0,0,0,0)'>
            <View style={styles.bizInfo}>
              <View style={{width: 50, height: 50, paddingTop: 7, alignItems: 'center', display: 'flex'}}>
                <Avatar
                  small
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  containerStyle={styles.bizAvatar}
                />
              </View>

              <View style={styles.bizTitle}>
                <Text style={{fontWeight: 'bold'}}>Tên doanh nghiệp</Text>
              </View>
            </View>
          </TouchableHighlight>
        </ShowIf>
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
      </View>
      );
  }
}

PromotionListItem.propTypes = {
  promotion: PropTypes.object
}


let styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 210,
    backgroundColor: '#eee',
    marginBottom: 4
  },
  bizInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width,
    backgroundColor: '#fff'
  },
  bizAvatar: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    width: 36,
    height: 36,
    alignItems: 'center'
  },
  bizTitle: {

  },
  row: {
    display: 'flex',
    height: 160,
    width: width,
    justifyContent: 'center',
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
