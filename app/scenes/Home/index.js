import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import { MenuComponent } from '../../components/SideMenu';
import { CategoryListItem } from '../../components/CategoryListing';
import { connect } from 'react-redux';
import {Categories} from '../../api';

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

  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.props.dispatch(Categories.actions.list()).then(response => {
        this.props.dispatch({
          type: 'CATEGORIES_RECEIVED',
          categories: response.data
        });

        this.setState({
          dataSource: ds.cloneWithRows(response.data)
        });
    });

    let imgSources = require('../../dump/logos');
    //this.props.dispatch();

    this.state = {
//      dataSource: ds.cloneWithRows(dump.categories),
      dataSource: ds.cloneWithRows([]),
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

export default connect()(Home);
