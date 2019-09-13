import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default class Interna extends Component{

    static navigationOptions = {
        title: 'Painel'
    }
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Bem vindo ao painel!</Text>
            </View>
        );
    }
}