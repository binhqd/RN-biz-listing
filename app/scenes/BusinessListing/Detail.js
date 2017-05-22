import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import MapView from 'react-native-maps';
import { BizInfo } from '../../components/BusinessDetail';

class BusinessDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
    //      headerRight: (
    //        <Icon
    //          raised
    //          name='bars'
    //          type='font-awesome'
    //          color='#000'
    //          onPress={() => state.params.handleMenuToggle()}
    //        />
    //
    //      ),
    };
  };

  constructor() {
    super()
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    let dumpBiz = {
      id: 1,
      name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
      description: "This is a business. This is a business. This is a business. This is a business. This is a business. ",
      image: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png',
      address: '35 Nguyen Tat Thanh, Q. Thanh Khe, TP. Đà Nẵng',
      phone: '0236 454432',
      fax: '0236 454433',
      website: 'http://theircompany.com'
    };

    let images = [];
    images.push(require('./1.jpg'));
    images.push(require('./2.jpg'));
    images.push(require('./3.jpg'));

    this.state = {
      dataSource: ds.cloneWithRows(dumpBiz),
      biz: dumpBiz,
      images: images
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ { flex: 1, flexDirection: 'column', backgroundColor: '#fff', padding: 20 } }>
        <View>
          <Text style={styles.bizTitle}>
            { this.state.biz.name }
          </Text>
        </View>
        <View style={ styles.row }>
          <View>
            <Image style={ styles.thumb } source={ { uri: this.state.biz.image } } />
          </View>
          <View style={ { flex: 1, marginLeft: 5 } }>
            <Text style={ styles.description }>
              { this.state.biz.description }
            </Text>
          </View>
        </View>
        <View style={ styles.mapContainer }>
          <MapView style={ styles.map } region={ { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } } />
        </View>
        <View style={ { flex: 1, flexDirection: 'row', justifyContent: 'space-around' } }>
          <Image style={ styles.bizThumbnail } source={ this.state.images[0] } />
          <Image style={ styles.bizThumbnail } source={ this.state.images[1] } />
          <Image style={ styles.bizThumbnail } source={ this.state.images[2] } />
        </View>
        <BizInfo biz={this.state.biz}/>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
    marginBottom: 0,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  thumb: {
    width: 64,
    height: 64
  },
  bizTitle: {
    fontWeight: 'bold'
  },
  text: {
    margin: 5,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 14
  },
  description: {
    margin: 5
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  bizThumbnail: {
    width: 100,
    height: 75
  }

});

export default BusinessDetail;