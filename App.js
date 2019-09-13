import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Interna from './src/Interna';

const Navegador = createStackNavigator({
  Home: {
    screen: Home
  },
  Interna: {
    screen: Interna
  }
},{

  initialRouteName: 'Home',
  
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;


