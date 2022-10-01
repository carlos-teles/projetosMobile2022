import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [busca, setBusca] = useState('');
  const [botao, setBotao] = useState(true);
  const [apresentaTxt, setApresentaTxt] = useState('');
  const [carregando, setCarregando] = useState(false);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
