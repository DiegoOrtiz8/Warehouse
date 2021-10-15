import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

class ViewData extends React.Component {
  render() {

    var navegar = this.props.navigation;
    var aux = navegar.getParam('paramsToId');

    var array = aux.split('|');
    
    var clave1 = array[0];
    var nombre1 = array[1];
    var cantidad1 = array[2];
    var descripcion1 = array[3];

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

        <Text style={styles.logoText}>Informacion del producto</Text>

        <Text style={styles.buttonText}>Nombre:</Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          defaultValue={nombre1}
          editable={false}
          placeholderTextColor="#ffffff"
          onChangeText={this.setNombre}
        />

        <Text style={styles.buttonText}>Clave:</Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#ffffff"
          defaultValue={clave1}
          editable={false}
          onChange={this.setState}
        />

        <Text style={styles.buttonText}>Descripcion:</Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          defaultValue={descripcion1}
          editable={false}
          placeholderTextColor="#ffffff"
          onChangeText={this.setDescripcion}
        />

        <Text style={styles.buttonText}>Cantidad:</Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          defaultValue={cantidad1}
          editable={false}
          placeholderTextColor="#ffffff"
          keyboardType={'numeric'}
          onChangeText={this.setCantidad}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    marginVertical: 8,
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    paddingVertical: 11,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default ViewData;