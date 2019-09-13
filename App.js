import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import CustomDrawer from './src/components/CustomDrawer';

// Criando as rotas para o app
const Navegador = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Contato: {
    screen: Contato
  }
},{
  contentComponent: CustomDrawer,
  initialRouteName: 'Home',
  drawerPosition: 'left',
  // drawerWidth: 150
  drawerBackgroundColor: '#373737',
  contentOptions:{
    // Cor ativa
    activeTintColor: '#24C2CB',
    activeBackgroundColor: '#FFF',
    inactiveTintColor: '#FFF',

    // Personalizando
    // itemsContainerStyle:{
    //   marginTop: 150
    // }
  }
  
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;


