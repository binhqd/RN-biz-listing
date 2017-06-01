import React, {Component} from 'react';

import { StackNavigator } from 'react-navigation';
import HomeScreen from '../../scenes/Home/index';
import ListBusiness from '../../scenes/BusinessListing/List';
import BusinessDetail from '../../scenes/BusinessListing/Detail';
import About from '../../scenes/About';
import { Provider } from 'react-redux';
import store from '../../store';

const BizListing = bizlisting = StackNavigator({
  Home: { screen: HomeScreen },
  ListBusinesses: { screen: ListBusiness },
  BizDetail: { screen: BusinessDetail },
  About: { screen: About }
}, {
  initialRouterName: 'Home'
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BizListing />
      </Provider>
    );
  }
}