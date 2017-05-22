import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

class BizItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let img = {
        uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png'
    }

    return (
      <TouchableHighlight underlayColor='rgba(0,0,0,0)'
        onPress={ () => this.props.navigation.navigate('BizDetail', { businessId: 'Lucy' }) }>
        <View style={ styles.row }>
          <View>
            <Image style={ styles.thumb } source={ img } />
          </View>
          <View style={ { flex: 1, flexDirection: 'column', marginLeft: 5 } }>
            <Text style={ styles.text }>
              { this.props.biz.name }
            </Text>
            <Text style={ styles.description }>
              { this.props.biz.description }
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
}
let styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
    marginBottom: 0,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    margin: 5,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 14
  },
  description: {
    margin: 5
  }

});


export default BizItem;