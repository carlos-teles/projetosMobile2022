import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View,StyleSheet,Button,Modal,Pressable ,Icon } from 'react-native';
import { Provider ,Appbar, Avatar,TextInput } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState(null);
  const [lastName, setLastNameText] = useState(null);
  const [email, setEmailText] = useState(null);
  const [password, setPasswordText] = useState(null);
  const [count, setPacoca] = useState("s");
  const validateAll = () =>
  {
      setPacoca(count + "ddddd");
      console.log(count);
      console.log("Add Val");
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    
      <Button title="Submit" onPress={() => validateAll()} style={styles.buttonstyle} color="#6200EE" />
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
