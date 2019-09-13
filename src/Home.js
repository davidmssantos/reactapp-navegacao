import React, { Component } from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard} from 'react-native';

import {NavigationActions, StackActions} from 'react-navigation';

export default class Home extends Component{

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };

    this.entrar = this.entrar.bind(this);

  }

  entrar(){
    if(this.state.email === 'admin@admin.com' && this.state.senha === '123123'){
      Keyboard.dismiss();
      //this.props.navigation.navigate('Interna');
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'Interna'})
        ]
      }))

    }else{
      alert('Algo deu errado!');
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Seja Bem vindo!</Text>

        <TextInput value={this.state.email} style={styles.input}
        onChangeText={(email)=> this.setState({email: email})} 
        placeholder="Email" placeholderTextColor="#FFF" />

        <TextInput value={this.state.senha} style={styles.input} 
        onChangeText={(senha)=> this.setState({senha: senha})} 
        placeholder="Senha" placeholderTextColor="#FFF" />

        <TouchableOpacity style={styles.btn} onPress={this.entrar}>
          <Text style={styles.btnText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
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
  },
  input:{
    backgroundColor: '#272727',
    color: '#FFFFFF',
    margin: 8,
    padding: 5,
    borderRadius: 5
  },
  btn:{
    backgroundColor: '#DDD',
    margin: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 18
  }
});