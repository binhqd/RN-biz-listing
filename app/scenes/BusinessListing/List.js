import React, { Component } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, ListView, View, ScrollView } from 'react-native';
import { LayoutWithSideBar } from '../../components/layouts';
import { BizItem } from '../../components/BusinessListing';

class ListBusinesses extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
      headerRight: (
      <Icon
            name='bars'
            type='font-awesome'
            color='#000'
            iconStyle={{
              marginRight: 20
            }}
            onPress={ () => state.params.handleMenuToggle() } />

      )
    };
  };

  constructor() {
    super()
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    let dumpBiz = require('../../dump/dumpbiz');

    let imgSources = require('../../dump/logos');

    this.state = {
      dataSource: ds.cloneWithRows(dumpBiz),
      images: imgSources
    };
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    let imgSource = this.state.images[Math.floor(Math.random() * this.state.images.length)];

    return (
      <BizItem navigation={ this.props.navigation }
               biz={ rowData }
               image={ imgSource } />
      );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <LayoutWithSideBar navigation={ this.props.navigation }>
        <View style={ {
                        flex: 1,
                        flexDirection: 'column'
                      } }>
          <SearchBar placeholder='Tìm kiếm doanh nghiệp...' />
          <ScrollView style={ {
                                backgroundColor: '#fff'
                              } }>
            <ListView contentContainerStyle={ styles.list }
                      dataSource={ this.state.dataSource }
                      renderRow={ this._renderRow.bind(this) } />
          </ScrollView>
        </View>
      </LayoutWithSideBar>
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
