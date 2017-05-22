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
import { MenuComponent } from '../../components/SideMenu';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
      headerRight: (
        <Icon
          raised
          name='bars'
          type='font-awesome'
          color='#000'
          onPress={() => state.params.handleMenuToggle()}
        />

      ),
    };
  };

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };

    this.THUMB_URLS = ['http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png'];
  }

  _pressData = ({}: {[key: number]: boolean})


  componentWillMount() {
    this.props.navigation.setParams({ handleMenuToggle: this.toggleSideMenu.bind(this) });
  }

  onSideMenuChange (isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    })
  }

  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
      var imgSource = {
        uri: this.THUMB_URLS[0],
      };
      return (
        <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
          <View>
            <View style={styles.row}>
              <Image style={styles.thumb} source={imgSource} />
              <Text style={styles.text}>
                {rowData}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }

    _genRows(pressData: {[key: number]: boolean}): Array<string> {
      var dataBlob = [];
      for (var ii = 1; ii <= 15; ii++) {
        dataBlob.push('Category ' + ii);
      }
      return dataBlob;
    }

    _pressRow(rowID: number) {
      this.props.navigation.navigate('ListBusinesses', { categoryId: 'Lucy' })
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SideMenu
            isOpen={this.state.isOpen}
            onChange={this.onSideMenuChange.bind(this)}
            menu={MenuComponent}>
          <View style={{
              flex: 1,
              flexDirection: 'column'
            }}>
            <View>
                <SearchBar placeholder='Type Here...' />
            </View>
            <View style={{backgroundColor: '#fff'}}>
                <ListView contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                  />
                <Button
                  onPress={() => navigate('ListBusiness', { categoryId: 'Lucy' })}
                  title="Chat with Lucy"
                />
            </View>
        </View>
      </SideMenu>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
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

export default Home;