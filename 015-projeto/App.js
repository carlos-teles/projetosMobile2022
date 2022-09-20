import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View, StyleSheet, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState('');
  const [lastName, setLastNameText] = useState('');
  const [email, setEmailText] = useState('');
  const [password, setPasswordText] = useState('');
  const [msgErr, setmsgErrText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true); 
  const [btnEnable, setbtnEnable] = useState(true); 

  const validateAll = () => {
    console.log("Validando form");
    validateStrSize(firstName);
    validateStrSize(lastName);
    validateStrSize(email);
    validateStrSize(password);
  }

  const validateStrSize = (text) => {
    if (text.length <= 3) {
      console.log("Campo preenchido incorretamente.");
      setmsgErrText("Campo preenchido incorretamente.");
      return false;
    }
 
  }

  const validateName = () => {
    //console.log(firstName.length);
    //firstName = firstName.trim();
    var cleanStr=firstName.trim();
    //console.log(cleanStr);
    if (cleanStr.length >= 3) {
      return false;
    }
  };

  const validatelastName = () => {
    //console.log(firstName.length);
    //firstName = firstName.trim();
    var cleanStr=lastName.trim();
    //console.log(cleanStr);
    if (cleanStr.length >= 3) {
      return false;
    }
  };  

  const validatePassword = () => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    //console.log(reg.test(password));
    //console.log(!reg.test(email));
    return !reg.test(password);

  };

  const validateMail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //console.log(reg.test(email));
    //console.log(!reg.test(email));
    return !reg.test(email);
  }; 

  return (
    <View style={styles.container}>
      {/* inicio campo nome */}
      <Text style={styles.labelText}>Nome:</Text>
      <TextInput style={styles.inputText} placeholder="Informe o seu Nome" onChangeText={firstName => setFirstNameText(firstName)} />
      <HelperText type="error" visible={validateName()}>
        O campo Nome está inválido!
      </HelperText>      
      {/* fim campo nome */}
      {/* inicio campo sobrenome */}
      <Text style={styles.labelText}>Sobrenome:</Text>
      <TextInput style={styles.inputText} placeholder="Informe o sobrenome" onChangeText={lastName => setLastNameText(lastName)} defaultValue={lastName} />
      <HelperText type="error" visible={validatelastName()}>
        O campo Sobrenome está inválido!
      </HelperText>            
      {/* fim campo sobrenome */}
      {/* inicio campo email */}
      <Text style={styles.labelText}>Email:</Text>
      <TextInput style={styles.inputText} placeholder="Informe o e-mail" onChangeText={email => setEmailText(email)} defaultValue={email} />

      <HelperText type="error" visible={validateMail()}>
        O campo e-mail está inválido!
      </HelperText>

      {/* fim campo email */}
      {/* inicio campo senha */}
      <Text style={styles.labelText}>Senha:</Text>
      <TextInput style={styles.inputText} label="Senha" secureTextEntry={secureTextEntry} placeholder="Informe a senha" onChangeText={password => setPasswordText(password)} right={ <TextInput.Icon  name="eye" onPress={() => {setSecureTextEntry(!secureTextEntry); return false;}}  /> } 
      />
      <HelperText type="error" visible={validatePassword()}>
        O campo senha está inválido!
      </HelperText>      
      {/* fim campo senha */}
      {/* inicio campo botao */}
      <Button title="Submit" style={styles.buttonstyle} disabled={btnEnable} color="#6200EE" />

      <Text>{msgErr}</Text>
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

  inputText: {
    height: 45,
    marginBottom: 15,
  },
  buttonstyle: {
    marginTop: 10,
  },

  labelText: {
    marginTop: 10,
    marginBottom: 5,
  },
});
