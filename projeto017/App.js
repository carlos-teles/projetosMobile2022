import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';
//
//https://api.sampleapis.com/coffee/iced
//https://api.sampleapis.com/coffee/hot
//
export default function App() {
  const [busca, setBusca] = useState('');
  const [botao, setBotao] = useState(true);
  const [apresentaTxt, setApresentaTxt] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateAll = () => {
    setCarregando(true);
    //console.log(busca);
    setBusca(busca);
    setTimeout(() => {
      fazBusca();      
    }, 5000);    
    //setBusca(parseInt(busca)+2);
    //busca => setBusca(busca);
  }

  const refreshScreen = () =>
  {
    setErrorMessage(null);
    setCarregando(false);
    setApresentaTxt('');
    setBusca('');
  }

  const fetchData = async () => {
    try{
          const resp = await fetch("https://api.sampleapis.com/coffee/"+busca);
          const data = await resp.json();
          //setData(data);
          setApresentaTxt("Sua busca é:"+busca+data);
          //setVisible(false);
          setCarregando(false);
        } catch (err){
          //Error
          //console.log("YYYY"+err);
          setErrorMessage("ERRO! Api retornou dados inválidos.");
        }
        
  };    

  const fazBusca = () => {
    fetchData();


    //Api OK
    //setCarregando(false);
    //setApresentaTxt("Sua busca é:"+busca);

    //Error
    //setErrorMessage("Busca nao implementada");
    
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
            <Button title="Voltar" style={styles.buttonstyle} onPress={() => {refreshScreen();}} color="#6200EE" />
            <StatusBar style="auto" />
          </View>
        );        
      }
    // Fim - Busca ou resultado da busca
    // Inicio - Apresenta o activity indicator  ou erro 
    } else {
      if(errorMessage){
        return (
          <View style={styles.errorStyle}>
            <Text>{errorMessage}</Text>
            <Button title="Voltar" style={styles.buttonstyle} onPress={() => {refreshScreen();}} color="#6200EE" />            
            <StatusBar style="auto" />
          </View>
        );
      } else {
          return (
            <View style={styles.container}>
              <ActivityIndicator size="large" color={styles.PRIMARY_COLOR} />            
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
  errorStyle: {
    backgroundColor: 'red',
    flex: 1,
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
