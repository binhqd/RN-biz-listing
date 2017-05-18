import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      title: 'Dashboard',
      headerRight: (
        <Icon
          name='bars'
          type='font-awesome'
          color='#f50'
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
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

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

  render() {

    const MenuComponent = (
        <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
          <Text>This is Menu!</Text>
        </View>
      )

    const { navigate } = this.props.navigation;
    return (
      <SideMenu
            isOpen={this.state.isOpen}
            onChange={this.onSideMenuChange.bind(this)}
            menu={MenuComponent}>
          <View>
            <SearchBar

              placeholder='Type Here...' />
            <Text>Hello, This is Homepage!</Text>
            <Button
              onPress={() => navigate('List', { user: 'Lucy' })}
              title="Chat with Lucy"
            />
          </View>
      </SideMenu>
    );
  }
}

export default Home;