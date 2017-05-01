/**
 * Tela index
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';



import LoginTela from "./src/pages/telaLogin";
import HomeTela from "./src/pages/telaHome";
import AdmTela from "./src/pages/telaAdm";


export default class appDoctor extends Component {

  render() {
    return (

          <View style={styles.container}>
              <HomeTela />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

 
AppRegistry.registerComponent('appDoctor', () => appDoctor);
