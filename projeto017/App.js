import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';


export default function App() {
  const [busca, setBusca] = useState('');
  const [botao, setBotao] = useState(true);
  const [apresentaTxt, setApresentaTxt] = useState('');
  const [carregando, setCarregando] = useState(false);

  const validateAll = () => {
    console.log("Teste");
  }

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
});
