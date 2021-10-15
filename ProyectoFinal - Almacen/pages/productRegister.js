import React, {Component} from 'react';
import {View, Text, StatusBar, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

class ProductRegister extends React.Component {
  state = {
    nombre: "",
    clave: "",
    descripcion: "",
    cantidad: ""
  }

  setNombre = (inputTexT) => {
    this.setState({nombre: inputTexT});
  }
  setClave = (inputTexT) => {
    this.setState({clave: inputTexT});
  }
  setDescripcion = (inputTexT) => {
    this.setState({descripcion: inputTexT});
  }
  setCantidad = (inputTexT) => {
    this.setState({cantidad: inputTexT});
  }

  registrar = () => {
    var navegar = this.props.navigation;

    if(this.state.nombre != '') {
      if(this.state.clave != '') {
        if(this.state.descripcion != '') {
          if(this.state.cantidad != '') {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  if (xhttp.responseText == 1) {
                    Alert.alert(
                      'Bien',
                      'Se ha registrado el producto',
                      [{text: 'ok', onPress: () => navegar.navigate('Menu')}]
                    );
                  } else {
                    Alert.alert(
                      //title
                      'Error',
                      'No se ha podido registrar al usuario',
                      [{ text: 'ok'}],
                      { cancelable: false }
                    );
                  }
                }
              };
              xhttp.open(
              'GET',
              "https://self-assured-light.000webhostapp.com/Almacen/registro_prod.php?clave="+this.state.clave + "&nombre="+this.state.nombre + "&descripcion="+this.state.descripcion + "&cantidad="+this.state.cantidad,
              true
              );
              xhttp.send();
          } else {
            alert('Cantidad faltante');
          }
        } else {
          alert('Descripcion faltante');
        }
      } else {
        alert('Clave faltante');
      }
    } else {
      alert('Nombre faltante');
    }// if nombre
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />

        <Text style = {styles.logoText}>Registrar producto</Text>

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Nombre"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setNombre}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Clave de producto"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setClave}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Descripcion"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setDescripcion}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Cantidad"
          placeholderTextColor = "#ffffff"
          keyboardType={'numeric'}
          onChangeText = {this.setCantidad}
        />

        <TouchableOpacity style={styles.button}
          onPress={this.registrar}>
          <Text style={styles.buttonText}>Registrar producto</Text>
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
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText : {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});

export default ProductRegister;