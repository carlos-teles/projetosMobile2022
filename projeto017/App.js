import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList, Image  } from 'react-native';
import { Chip, Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';
import SelectPicker from './components/SelectPicker'
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
  const [dadosJson, setdadosJson] = useState(null);
  const [valorCafe , setvalorCafe] = useState('')

  const validateAll = () => {

    var busca = valorCafe;
    setCarregando(true);
    //console.log(busca);
    //setBusca(busca);
    setBusca(valorCafe);
    //console.log(valorCafe);
    //console.log(busca);
    setTimeout(() => {
      fazBusca();      
    }, 5000);    

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
          const resp = await fetch("https://api.sampleapis.com/coffee/"+valorCafe);
          const data = await resp.json();
          setdadosJson(data);
          setApresentaTxt("Sua busca é: "+busca);
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
      //<TextInput style={styles.inputText} placeholder="Informe a busca" onChangeText={busca => setBusca(busca)} />
      if( apresentaTxt == '' ){
        return (
          <View style={styles.container}>
            {/* inicio campo busca */}
            <Text style={styles.labelText}>Busca:</Text>
            {"\n"}{"\n"}{"\n"}
            <SelectPicker valorCafe={valorCafe} setvalorCafe={setvalorCafe}/>
            {"\n"}{"\n"}{"\n"}
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
            {dadosJson && ( <FlatList
                  data={dadosJson} renderItem={({item}) => 
                  <View style={{flexDirection: "row", padding:3}}>
                  <Image style={styles.tinyLogo} source={{uri:item.image}} />
                  <Text>{item.title}</Text>
                </View>                  
                  
                  } /> )}
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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 4,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },  
});
