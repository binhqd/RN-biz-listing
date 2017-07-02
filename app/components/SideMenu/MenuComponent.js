import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {connect} from 'react-redux';
import CONFIG from '../../constants';

class MenuComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    let imgSources = require('../../dump/logos');

    this.state = {
      images: imgSources
    }
  }

  _pressRow(category) {
    this.props.navigation.navigate('ListBusinesses', category);
  }

  gotoAbout() {
    this.props.navigation.navigate('About');
  }

  listPromotions() {
    this.props.navigation.navigate('ListPromotions');
  }

  goHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    let logo = require('../../assets/images/app-logo.png');

    return (
      <View style={ styles.sideMenu }>
        <TouchableHighlight underlayColor='rgba(0,0,0,0)'
          onPress={ this.goHome.bind(this) }>
          <View style={ styles.header }>
            <Image source={ logo }  style={ styles.appLogo }/>

          </View>
        </TouchableHighlight>
        <ScrollView style={ styles.scrollContainer }>
        <List containerStyle={ styles.menuContainer }>
          <ListItem  onPress={ this.gotoAbout.bind(this) } title='Giới thiệu' />
          <ListItem  onPress={ this.listPromotions.bind(this) } title='Tin khuyến mãi' />
          { this.props.categories.map((category, i) => {
              let imgSource = this.state.images[Math.floor(Math.random()*this.state.images.length)];
              if (category.logo) {
                imgSource = {uri:`${CONFIG.STATIC_URL}/category-logos/${category.logo}`};
              }

              return (
                <ListItem  roundAvatar avatar={ imgSource } onPress={ () => this._pressRow(category) } key={ i } title={ category.name } />
              )
            }) }
        </List>
        </ScrollView>
      </View>
      );
  }
}

let styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'column'
  },
  header: {
    display:'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    position: 'relative'
  },
  appLogo: {
    display:'flex',
    height: 90,
    width: null,
    position: 'absolute',
    top: 5,
    bottom: 5,
    left: 5,
    right: 5

  },
  menuContainer: {
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  scrollContainer : {
    backgroundColor: '#fff',
    padding: 0
  }
});

MenuComponent.defaultProps = {
  categories: []
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(MenuComponent);
