import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';

export default class Home extends Component{

  static navigationOptions = {
    drawerLabel: 'Contato',
    drawerIcon: ({tintColor}) => (
      <Image  source={require('./img/contato_ativo.png')}
              style={[{width: 30, height: 30}, {tintColor: tintColor}]}
      />
    )

  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Pagina Contato!</Text> 

        <Button onPress={()=> this.props.navigation.navigate('Home')} 
                title="Ir para Home"/>

        {/* Abre e fecha  Drawer */}
        <Button onPress={()=> this.props.navigation.toggleDrawer()} 
                title="Abrir"/>                  

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 35,
    color: '#272727',
    textAlign: 'center'
  }
});