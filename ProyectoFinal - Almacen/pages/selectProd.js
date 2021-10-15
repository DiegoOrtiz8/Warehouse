import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';

class SelectProd extends React.Component {

  state={
    nombre: '',
    array: '',
  }

  setNombre = value => {
    this.setState({ nombre : value });
  }

  obtainData() {
    var navega = this.props.navigation;
    var that = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (xhttp.responseText != '') {
          that.setState({ array: xhttp.responseText });
        }
      }
    };
    xhttp.open(
      'GET',
      'https://self-assured-light.000webhostapp.com/Almacen/selectProd.php?',
      true
    );
    xhttp.send();
  }

  verProd = () => {
    var navegar = this.props.navigation;
    
    var name = this.state.nombre;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (xhttp.responseText != '') {
          var aux = xhttp.responseText; // nombre
          navegar.navigate('ViewData', {paramsToId: aux});
        }
      }
    };
    xhttp.open(
      'GET',
      'https://self-assured-light.000webhostapp.com/Almacen/verByName.php?nombre=' + this.state.nombre,
      true
    );
    xhttp.send();
  }

  render() {
    this.obtainData();
    var newArray = this.state.array.split(',');
    var aux;

    return(
      <View style={styles.container}>
        <Text style={styles.logoText}>Seleccionar un producto</Text>

        <CustomPicker
          style={styles.button}
          options={newArray}
          placeholder="Lista de productos"
          onValueChange={this.setNombre}
          selectedValue={this.state.nombre}    
        />

        <TouchableOpacity style={styles.button} onPress={this.verProd}>
          <Text style={styles.buttonText}>Ver informacion</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText : {
    marginVertical: 8,
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  button : {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  buttonText : {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});

export default SelectProd;