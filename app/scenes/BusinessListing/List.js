import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

class ListBusinesses extends React.Component {
  static navigationOptions = ({ navigation }) => {
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

  constructor () {
    super()
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      let dumpBiz = [
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },
        {
            id: 1,
            name: "Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 Biz 1 ",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

        {
            id: 2,
            name: "Biz 2",
            description: "This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. This is a business. "
        },

      ];

      this.THUMB_URLS = ['http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png'];

      this.state = {
        dataSource: ds.cloneWithRows(dumpBiz),
      };
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
        var imgSource = {
          uri: this.THUMB_URLS[0],
        };
        return (
          <TouchableHighlight underlayColor='rgba(0,0,0,0)'
          onPress={() => this.props.navigation.navigate('BizDetail', { businessId: 'Lucy' })}>
          <View style={styles.row}>
            <View>
              <Image style={styles.thumb} source={imgSource} />
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginLeft: 5
            }}>
              <Text style={styles.text}>{rowData.name}</Text>
              <Text style={styles.description}>{rowData.description}</Text>
            </View>
          </View>
          </TouchableHighlight>
        );
      }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View>
          <SearchBar placeholder='Tìm kiếm doanh nghiệp...' />
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <ListView contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
         />
        </View>
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

export default ListBusinesses;