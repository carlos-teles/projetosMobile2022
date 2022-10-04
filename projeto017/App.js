import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';


export default function App() {
  const [busca, setBusca] = useState('');
  const [botao, setBotao] = useState(true);
  const [apresentaTxt, setApresentaTxt] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateAll = () => {
    console.log(busca);
    //setBusca(busca+"xxxx")
    setBusca(parseInt(busca)+2);
    //busca => setBusca(busca);
  }

    // Inicio - Busca ou resultado da busca
    if( carregando == false ){
      //Nao tem retorno da API
      if( apresentaTxt == '' ){
        return (
          <View style={styles.container}>
            {/* inicio campo busca */}
            <Text style={styles.labelText}>Busca:</Text>
            <TextInput style={styles.inputText} placeholder="Informe a busca" onChangeText={busca => setBusca(busca)} />{"\n"}
            <Button title="Enviar os dados" style={styles.buttonstyle} onPress={() => {validateAll();}} color="#6200EE" />
            <Text style={styles.labelText}>{busca}</Text>
            <StatusBar style="auto" />
          </View>
        );
      }
      else
      {
        //Tem retorno da API
        return (
          <View style={styles.container}>
            <Text>{apresentaTxt}</Text>
            <StatusBar style="auto" />
          </View>
        );        
      }
    // Fim - Busca ou resultado da busca
    // Inicio - Apresenta o activity indicator  ou erro 
    } else {
      if(errorMessage){
        return (
          <View style={styles.container}>
            <Text>{errorMessage}</Text>B
            <StatusBar style="auto" />
          </View>
        );
      } else {
          return (
            <View style={styles.container}>
              <ActivityIndicator size="large" color={styles.PRIMARY_COLOR} />A
              <StatusBar style="auto" />
            </View>
          );
      }
      // Fim - Apresenta o activity indicator  ou erro 
    }  


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle: {
    marginTop: 10,
  },  
  inputText: {
    width: 200, height: 40, backgroundColor: 'powderblue'
  },
  colors: {
    PRIMARY_COLOR: '#ff304f',
    SECONDARY_COLOR: '#002651',
    BORDER_COLOR: '#dbdbdb',
  }
  
});
