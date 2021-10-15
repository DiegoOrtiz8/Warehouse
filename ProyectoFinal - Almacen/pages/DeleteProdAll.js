import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';

class DeleteProdAll extends React.Component {

  eliminar = () => {
    // Variable para navegar
    var navegar = this.props.navigation;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        if (xhttp.responseText == 0) {
          Alert.alert(
            //title
            'Bien',
            'Productos Eliminados',
            [{ text: 'ok', onPress: () => navegar.navigate('Menu') }],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            //title
            'Bien',
            'Productos Eliminados',
            [{ text: 'ok', onPress: () => navegar.navigate('Menu') }],
            { cancelable: false }
          );
        }
      }
    };
    xhttp.open(
      'GET',
      'https://self-assured-light.000webhostapp.com/Almacen/deleteProdAll.php',true
    );
    xhttp.send();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

        <Text style={styles.logoText}>Eliminar productos</Text>

        <TouchableOpacity style={styles.button} onPress={this.eliminar}>
          <Text style={styles.buttonText}>Eliminar</Text>
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

export default DeleteProdAll;