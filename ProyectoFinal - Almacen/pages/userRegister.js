import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TextInput, Alert, StatusBar, TouchableOpacity} from 'react-native';

class UserRegister extends React.Component {
  state = {
    nombre: "",
    apaterno: "",
    amaterno: "",
    usuario: "",
    contrasenia: ""
  }

  setNombre = (inputTexT) => {
    this.setState({nombre: inputTexT});
  }
  setApaterno = (inputTexT) => {
    this.setState({apaterno: inputTexT});
  }
  setAmaterno = (inputTexT) => {
    this.setState({amaterno: inputTexT});
  }
  setUsuario = (inputTexT) => {
    this.setState({usuario: inputTexT});
  }
  setContrasenia = (inputTexT) => {
    this.setState({contrasenia: inputTexT});
  }

  registrar = () => {
    var navegar = this.props.navigation;

    if(this.state.nombre != '') {
      if(this.state.apaterno != '') {
        if(this.state.amaterno != '') {
          if(this.state.usuario != '') {
            if(this.state.contrasenia != '') {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  if (xhttp.responseText > 0) {
                    Alert.alert(
                      'Bien',
                      'Se ha registrado al usuario',
                      [{text: 'ok', onPress: () => navegar.navigate("Login")}]
                    );
                  } else {
                    Alert.alert(
                      //title
                      'Error',
                      'Usuario o contraseña incorrecta',
                      [{ text: 'ok'}],
                      { cancelable: false }
                    );
                  }
                }
              };
              xhttp.open(
              'GET',
              "https://self-assured-light.000webhostapp.com/Almacen/registro_user.php?nombre="+this.state.nombre + "&apaterno="+this.state.apaterno + "&amaterno="+this.state.amaterno + "&usuario="+this.state.usuario + "&contrasenia="+this.state.contrasenia,
              true
              );
              xhttp.send();
            } else {
              alert('Contraseña faltante');
            } // if contrasenia
          } else {
            alert('Usuario faltante');
          } // if usuario
        } else {
          alert('Apellido materno faltante');
        } // if amaterno
      } else {
        alert('Apellido paterno faltante');
      } // if apaterno
    } else {
      alert('Nombre(s) faltante');
    } // if nombre
  } // if registrar

  render() {
    var navega = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style = {styles.logoText}>Registrar Usuario</Text>

        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Nombre"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setNombre}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Apellido Paterno"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setApaterno}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Apellido Materno"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setAmaterno}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Nombre de Usuario"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setUsuario}
        />

        <TextInput style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Contraseña"
          placeholderTextColor = "#ffffff"
          secureTextEntry={true}
          onChangeText = {this.setContrasenia}
        />

        <TouchableOpacity style={styles.button}
          onPress={this.registrar}>
          <Text style={styles.buttonText}>Registrar Usuario</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonBack}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Volver</Text>
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
  buttonBack : {
    width: 200,
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

export default UserRegister;
