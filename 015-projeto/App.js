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
  const [ctrlForm, setctrlForm] = useState(0); 
  
  const validateAll = () => {
    //console.log("Validando form");
    //console.log(validateName());
    //console.log(validatelastName());
    //console.log(validatePassword());
    //console.log(validateMail());
    if( validateName() == false && validatelastName() == false && validatePassword() == false && validateMail() == false )
    {
      setmsgErrText("");
    }
    else
    {
      setmsgErrText("Há algum campo preenchido incorretamente. Verifique!");
    }


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
  /*
  https://dev.to/petroskoulianos/3-password-regex-for-your-next-project-53fn
  // more secure regex password must be :
  // more than 8 chars  
   // at least one number
   // at least one special character
  */

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
      <Button title="Enviar os dados" style={styles.buttonstyle} onPress={() => {validateAll();}} color="#6200EE" />

      <Text style={styles.errorColor} >{msgErr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8,
  },
  errorColor: {
    backgroundColor: 'red',
  },
  inputText: {
    width: 200, height: 40, backgroundColor: 'powderblue'
  },
  buttonstyle: {
    marginTop: 10,
  },

  labelText: {
    marginTop: 10,
    marginBottom: 5,
  },
});
