import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

class MakeChanges extends React.Component {
  state = {
    nombre: '',
    clave: '',
    descripcion: '',
    cantidad: '',
  };

  setNombre = inputTexT => {
    this.setState({ nombre: inputTexT });
  };
  setClave = inputTexT => {
    this.setState({ clave: inputTexT });
  };
  setDescripcion = inputTexT => {
    this.setState({ descripcion: inputTexT });
  };
  setCantidad = inputTexT => {
    this.setState({ cantidad: inputTexT });
  };

  modificar = () => {
    var navegar = this.props.navigation;
    var key = navegar.getParam('paramsToId');
    var aux = key.split('|');
    var clave1 = aux[0];
    var nombre1 = aux[1];
    var cantidad1 = aux[2];
    var descripcion1 = aux[3];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        if (xhttp.responseText == 1) {
          Alert.alert('Bien', 'Se ha modificado el producto', [
            { text: 'ok', onPress: () => navegar.navigate('Menu') },
          ]);
        }
      }
    };
    xhttp.open(
      'GET',
      'https://self-assured-light.000webhostapp.com/Almacen/hacer_cambio.php?clave=' +
        clave1 +
        '&nombre=' +
        this.state.nombre +
        '&descripcion=' +
        this.state.descripcion +
        '&cantidad=' +
        this.state.cantidad,
      true
    );
    xhttp.send();
  };

  render() {
    // Variables para navegar
    var navegar = this.props.navigation;
    var key = navegar.getParam('paramsToId');

    // Obtengo datos separados
    var aux = key.split('|');
    var clave1 = aux[0];
    var nombre1 = aux[1];
    var cantidad1 = aux[2];
    var descripcion1 = aux[3];

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

        <Text style={styles.logoText}>Modificar producto</Text>

        <Text style={styles.buttonText}>Nombre:</Text>
        <TextInput
          style={styles.inputBox}
          //value={nombre1}
          underlineColorAndroid="rgba(0,0,0,0)"
          //placeholder={nombre1}
          defaultValue={nombre1}
          editable={true}
          placeholderTextColor="#ffffff"
          onChangeText={this.setNombre}
        />

        <Text style={styles.buttonText}>Clave:</Text>
        <TextInput
          style={styles.inputBox}
          value={clave1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#ffffff"
          defaultValue={clave1}
          editable={false}
          onChange={this.setState}
        />

        <Text style={styles.buttonText}>Descripcion:</Text>
        <TextInput
          style={styles.inputBox}
          //value={descripcion1}
          underlineColorAndroid="rgba(0,0,0,0)"
          //placeholder={descripcion1}
          defaultValue={descripcion1}
          editable={true}
          placeholderTextColor="#ffffff"
          onChangeText={this.setDescripcion}
        />

        <Text style={styles.buttonText}>Cantidad:</Text>
        <TextInput
          style={styles.inputBox}
          //value={cantidad1}
          underlineColorAndroid="rgba(0,0,0,0)"
          //placeholder={cantidad1}
          defaultValue={cantidad1}
          editable={true}
          placeholderTextColor="#ffffff"
          keyboardType={'numeric'}
          onChangeText={this.setCantidad}
        />

        <TouchableOpacity style={styles.button} onPress={this.modificar}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
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

export default MakeChanges;
