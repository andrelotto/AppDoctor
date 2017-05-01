import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

const botaoPressionado = () => {
  Alert.alert('Fazendo login...');
};

const botaoEsqueceuSenha = () => {
  Alert.alert('informar email para envio da nova senha...');
};

const IconSenha = require("../imgs/login_lock.png");
const IconLogin = require("../imgs/login_person.png");

export default class LoginTela extends Component {
  render() {
    return (
			 <View style={estilo.principal}>
			               
				<Image source={require('../imgs/logoDoctor.jpg')}  style={estilo.logo}/>

				<View>
				  <TextInput style={estilo.entrada} underlineColorAndroid='transparent'  placeholder="matricula" />
				</View>

				<View>
				  <TextInput secureTextEntry={true} style={estilo.entrada} underlineColorAndroid='transparent'  placeholder="senha" />
				</View>

				<View>
				  <TouchableOpacity onPress={botaoPressionado} style={estilo.botao}>
				    <Text > ENTRAR </Text>
				  </TouchableOpacity>
				</View>     

				<TouchableOpacity  onPress={botaoEsqueceuSenha}>
					<View>
						<Text style={estilo.esqueceSenha}> Esqueceu Senha</Text>
					</View>
				</TouchableOpacity>

			</View>
		);
	}
}


const estilo = StyleSheet.create({
 entrada:{
     width:300,
     height: 40,
     borderColor: 'gray',
     borderWidth: 0,
     backgroundColor:'white',
     borderWidth: 1,
     marginTop: 10
   },

  
    logo:{
      width: 200,
      height: 200,
      margin: 20 
  },
   principal:{
      backgroundColor: '#91b8da',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   botao:{
    backgroundColor: '#e88585',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
   },

   esqueceSenha:{
   	marginTop:20,
   	color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15 
      
   }
}); 