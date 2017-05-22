import React, { Component } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, ListView, View } from 'react-native';

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

    let dumpBiz = require('./dumpbiz');

    this.state = {
      dataSource: ds.cloneWithRows(dumpBiz),
    };
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    return (
      <BizItem navigation={ this.props.navigation } biz={ rowData } />
      );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ { flex: 1, flexDirection: 'column' } }>
        <View>
          <SearchBar placeholder='Tìm kiếm doanh nghiệp...' />
        </View>
        <View style={ { backgroundColor: '#fff' } }>
          <ListView contentContainerStyle={ styles.list } dataSource={ this.state.dataSource } renderRow={ this._renderRow.bind(this) } />
        </View>
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