import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';


class Login extends React.Component {
  state={
    user: "",
    pass: ""
  }

  setUser = (inputText) => {
    this.setState({user: inputText});
  }
  setPassword = (inputText) => {
    this.setState({pass: inputText});
  }

  entrar = () => {

    var navega = this.props.navigation;


    if (this.state.user != '') {
      if (this.state.pass != '') {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {            
            if (xhttp.responseText > 0) {
              var idNumber = xhttp.responseText;
              navega.navigate('Menu', { paramsToId: idNumber })
            } else {
              Alert.alert(
                //title
                'Error',
                'Usuario o contraseña incorrecta',
                [{ text: 'ok', onPress: () => navega.navigate("Login") }],
                { cancelable: false }
              );
            }
          }
        };
        xhttp.open(
          'GET',
          "https://self-assured-light.000webhostapp.com/Almacen/login.php?usuario="+this.state.user + "&contrasenia=" + this.state.pass,
          true
        );
        xhttp.send();

        //this.props.navigation.navigate('Sesion');
      } else {
        alert('Ingrese contraseña');
      }
    } else {
      alert('Ingrese nombre');
    }
  };
  render() {

    var navegar = this.props.navigation;

    return(
      <View style={styles.container}>

        <Image style={{width: 130, height: 130}}
          source={{uri:'https://i.imgur.com/ER0rKcl.png'}}
        />
        <Text style={styles.logoText}>Bienvenido</Text>

        <TextInput style = {styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Usuario"
          placeholderTextColor = "#ffffff"
          onChangeText = {this.setUser}
        />

        <TextInput style = {styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder = "Contraseña"
          placeholderTextColor = "#ffffff"
          secureTextEntry={true}
          onChangeText = {this.setPassword}
        />

        <TouchableOpacity style={styles.button}
        onPress={this.entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}
        onPress={() => navegar.navigate("UserRegister")}>
          <Text style={styles.buttonText}>Registrarse</Text>     
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
    width: 250,
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

export default Login;