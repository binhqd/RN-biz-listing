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

    let dump = require('../../dump/dumpCategories');

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
      dataSource: ds.cloneWithRows(dump.categories),
      images: imgSources
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

  render() {
    const {navigate} = this.props.navigation;
    let menu = <MenuComponent navigation={this.props.navigation}/>
    return (
      <SideMenu isOpen={ this.state.isOpen }
                onChange={ this.onSideMenuChange.bind(this) }
                menu={ menu }>
        <View style={ styles.homeContainer }>
          <SearchBar placeholder='Tìm kiếm lĩnh vực doanh nghiệp' />
          <ListView contentContainerStyle={ styles.list }
                    dataSource={ this.state.dataSource }
                    enableEmptySections
                    renderRow={ (rowData) => {
                      let imgSource = this.state.images[Math.floor(Math.random()*this.state.images.length)];
                      return <CategoryListItem category={ rowData } image={imgSource} navigation={ this.props.navigation } />
                    }} />
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
