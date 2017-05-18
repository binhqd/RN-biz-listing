/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/scenes/Home/index';
import ListBusiness from './app/scenes/BusinessListing/List';

const bizlisting = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListBusiness }
}, {
  initialRouterName: 'Home'
});

AppRegistry.registerComponent('bizlisting', () => bizlisting);
