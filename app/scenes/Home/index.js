import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import { MenuComponent } from '../../components/SideMenu';
import { CategoryListItem } from '../../components/CategoryListing';

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
      headerRight: (
      <Icon raised
            name='bars'
            type='font-awesome'
            color='#000'
            onPress={ () => state.params.handleMenuToggle() } />

      ),
    };
  };

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };

  }

  componentWillMount() {
    this.props.navigation.setParams({
      handleMenuToggle: this.toggleSideMenu.bind(this)
    });
  }

  onSideMenuChange(isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    })
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 1; ii <= 15; ii++) {
      dataBlob.push({
        name: 'Category ' + ii
      });
    }
    return dataBlob;
  }

  render() {
    const {navigate} = this.props.navigation;
    let menu = <MenuComponent/>
    return (
      <SideMenu isOpen={ this.state.isOpen }
                onChange={ this.onSideMenuChange.bind(this) }
                menu={ menu }>
        <View style={ styles.homeContainer }>
          <SearchBar placeholder='Type Here...' />
          <ListView contentContainerStyle={ styles.list }
                    dataSource={ this.state.dataSource }
                    renderRow={ (rowData) => <CategoryListItem category={ rowData } navigation={ this.props.navigation } /> } />
        </View>
      </SideMenu>
      );
  }
}

var styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  }
});

export default Home;