import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';

class Menu extends React.Component {
  render() {

    var navega = this.props.navigation;

    return (
      <View style={styles.container}>

        <Text style={styles.logoText}>Control de Inventario</Text>

        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('Inventory')}>
          <Text style={styles.buttonText}>Ver Inventario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('ProductRegister')}>
          <Text style={styles.buttonText}>Registrar Producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navega.navigate('ModifyProd')}>
          <Text style={styles.buttonText}>Modificar Producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => navega.navigate('DeleteMenu')}>     
          <Text style={styles.buttonText}>Eliminar Producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonExit}
          //onPress={() => this.props.navigation.navigate('Login')}
          onPress={() => navega.navigate('Login')}
        >
         <Text style={styles.buttonText}>Cerrar Sesion</Text>
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
   buttonExit: {
     backgroundColor: 'rgba(162, 7, 7, 0.7)',
     borderRadius: 25,
     marginVertical: 10,
     paddingVertical: 12,
     paddingHorizontal: 60, 
   },
   buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color: "#ffffff",
     textAlign: 'center',
   }
});

export default Menu;