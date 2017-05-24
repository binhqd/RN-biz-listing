import React, { Component } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, ListView, View, ScrollView } from 'react-native';

import {BizItem} from '../../components/BusinessListing';

class ListBusinesses extends React.Component {
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

    let dumpBiz = require('../../dump/dumpbiz');

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
      dataSource: ds.cloneWithRows(dumpBiz),
      images: imgSources
    };
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    let imgSource = this.state.images[Math.floor(Math.random()*this.state.images.length)];

    return (
      <BizItem navigation={ this.props.navigation } biz={ rowData } image={imgSource}/>
      );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ { flex: 1, flexDirection: 'column' } }>
        <SearchBar placeholder='Tìm kiếm doanh nghiệp...' />
        <ScrollView style={ { backgroundColor: '#fff' } }>
          <ListView contentContainerStyle={ styles.list } dataSource={ this.state.dataSource } renderRow={ this._renderRow.bind(this) } />
        </ScrollView>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

export default ListBusinesses;
