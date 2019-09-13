import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';

// Criando as rotas para o app
const Navegador = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Contato: {
    screen: Contato
  }
},{

  initialRouteName: 'Home',

  
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;


