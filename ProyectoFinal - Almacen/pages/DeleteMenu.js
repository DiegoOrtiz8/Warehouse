import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';

class DeleteMenu extends React.Component {
  render() {
    var navega = this.props.navigation;
    return(
      <View style={styles.container}>

        <Text style={styles.logoText}>Eliminar productos</Text>

        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('DeleteProdAll')}>
          <Text style={styles.buttonText}>Eliminar todos los productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('ProductDelete')}>
          <Text style={styles.buttonText}>Eliminar un producto</Text>
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

export default DeleteMenu;