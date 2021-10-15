import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';

class Inventory extends React.Component {
  render() {
    var navega = this.props.navigation;
    return(
      <View style={styles.container}>

        <Text style={styles.logoText}>Inventario</Text>

        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('VerTodo')}>
          <Text style={styles.buttonText}>Ver todos los productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('SelectProd')}>
          <Text style={styles.buttonText}>Seleccionar un producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('VerUno')}>
          <Text style={styles.buttonText}>Buscar un producto</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#455a64',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   logoText: {
     marginVertical: 20,
     fontSize: 34,
     color: 'rgba(255, 255, 255, 0.7)'
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
     color: "#ffffff",
     textAlign: 'center',
   }
});

export default Inventory;