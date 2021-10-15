import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class ModifyProd extends React.Component {
  state = {
    clave: '',
  };

  setClave = inputTexT => {
    this.setState({ clave: inputTexT });
  };

  buscar = () => {
    var navegar = this.props.navigation;

    if (this.state.clave != '') {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(xhttp.responseText);
          if(xhttp.responseText == 0) {
            Alert.alert(
              //title
              'Mensaje',
              'No se ha encontrado el producto',
              [{ text: 'ok', onPress: () => navegar.navigate('ModifyProd')}],
              { cancelable: false }
            );
          }
          // Obtengo la clave para despues mandarlo como parametro
          var key = xhttp.responseText;
          navegar.navigate('MakeChanges', { paramsToId: key });
        }
      };
      xhttp.open(
        'GET',
        'https://self-assured-light.000webhostapp.com/Almacen/buscar_mod.php?clave=' +
          this.state.clave,
        true
      );
      xhttp.send();
    } else {
      alert('Clave faltante');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Text style={styles.logoText}>Modificar producto</Text>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Clave del producto a modificar"
          placeholderTextColor="#ffffff"
          onChangeText={this.setClave}
        />

        <TouchableOpacity style={styles.button} onPress={this.buscar}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
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
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default ModifyProd;
