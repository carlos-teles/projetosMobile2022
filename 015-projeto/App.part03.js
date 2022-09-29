import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View,StyleSheet,Button,Modal,Pressable ,Icon } from 'react-native';
import { Provider ,Appbar, Avatar,TextInput } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState(null);
  const [lastName, setLastNameText] = useState(null);
  const [email, setEmailText] = useState(null);
  const [password, setPasswordText] = useState(null);
  
  return (
    <View style={styles.container}>

	<Text style={styles.labelText}>Nome:</Text>
	   <TextInput style={styles.inputText} placeholder="Informe o seu Nome" onChangeText={firstName => setFirstNameText(firstName)}  /> 

        <Text style={styles.labelText}>Sobrenome:</Text>
	   <TextInput style={styles.inputText} placeholder="Informe o sobrenome" onChangeText={lastName => setLastNameText(lastName)} defaultValue={lastName} />
	<Text style={styles.labelText}>Email:</Text>
           <TextInput style={styles.inputText} placeholder="Informe o e-mail" onChangeText={email => setEmailText(email)} defaultValue={email} />
	<Text style={styles.labelText}>Senha:</Text>
           <TextInput style={styles.inputText} label="Senha" secureTextEntry={true} placeholder="Informe a senha" onChangeText={password => setPasswordText(password)} defaultValue={password} />


            


           <Button   title="Submit" style={styles.buttonstyle} color="#6200EE" />           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText:{
    height:45,
    marginBottom: 15,
  },
  buttonstyle:{
    marginTop: 10,
  },  

  labelText:{
    marginTop: 10,
    marginBottom: 5,
  },  
});
