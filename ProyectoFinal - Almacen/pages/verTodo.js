import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class VerTodo extends React.Component {
  buscar = () => {
    var navegar = this.props.navigation;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (xhttp.responseText != '') {
          global.MyVar = xhttp.responseText;
          Alert.alert(
            //title
            'Productos',
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
      'https://self-assured-light.000webhostapp.com/Almacen/ver_todo.php',
      true
    );
    xhttp.send();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>Ver todos los productos</Text>
      
        <TouchableOpacity style={styles.button} onPress={this.buscar}>
          <Text style={styles.buttonText}>Ver informacion</Text>
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
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default VerTodo;
