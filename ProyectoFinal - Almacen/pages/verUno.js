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

class VerUno extends React.Component {

  state = {
    clave: '',
  };

  setClave = inputTexT => {
    this.setState({ clave: inputTexT });
  };

  buscar = () => {
    var navegar = this.props.navigation;

    if(this.state.clave != '') {
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(xhttp.responseText != '') {
          global.MyVar = xhttp.responseText;
          Alert.alert(
            //title
            'Informacion del producto',
            xhttp.responseText,
            [
              {
                text: 'ok',
                onPress: () => navegar.navigate('Menu'),
              },
            ],
            { cancelable: true }
          );
        }

      }
    };
    xhttp.open(
      'GET',
      'https://self-assured-light.000webhostapp.com/Almacen/obtener_inv.php?clave=' +
        this.state.clave,
      true
    );
    xhttp.send();
    }else {
      alert('Clave faltante');
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

        <Text style={styles.logoText}>Buscar producto</Text>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Clave del producto a buscar"
          placeholderTextColor="#ffffff"
          onChangeText={this.setClave}
        />

        <TouchableOpacity style={styles.button} onPress={this.buscar}>
          <Text style={styles.buttonText}>Buscar</Text>
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
  inputBox : {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
    paddingVertical: 11
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

export default VerUno;