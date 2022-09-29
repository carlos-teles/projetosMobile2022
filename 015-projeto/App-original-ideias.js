import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View,StyleSheet,Button,Modal,Pressable ,Icon } from 'react-native';
import { Provider ,Appbar, Avatar,TextInput } from 'react-native-paper';


export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");

  const [modalVisible, setModalVisible] = React.useState(false);

  const [firstName, setFirstNameText] = React.useState('');

  const [lastName, setLastNameText] = React.useState('');
  
  const [email, setEmailText] = React.useState('');

  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name:firstName,last_name:lastName,email:email })
    };

  const handleClick = async () => {
     fetch('https://api.mywebtuts.com/api/users', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  };

  const validateAll = () =>
  {
      console.log(validate(email));
      console.log("Validando");
  }

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //console.log(text, reg.test(text));
    return reg.test(text);
  };


  return (
    <Provider>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Mywebtuts" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
      <View style={styles.mainbox}>
         <Text style={styles.labelText}>Fist Name:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Fist Name"
            onChangeText={firstName => setFirstNameText(firstName)}
            defaultValue={firstName}
          />
           <Text style={styles.labelText}>Last Name:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Last Name"
            onChangeText={lastName => setLastNameText(lastName)}
            defaultValue={lastName}
          />
          <Text style={styles.labelText}>Email:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Email"
            onChangeText={email => setEmailText(email)}
            //onChangeText={validate}
            defaultValue={email}
          />
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>User Create Successfully</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
           <Button
            title="Submit"
            //onPress={() => handleClick(this)} 
            //onPress={() => setModalVisible(true)}  
            onPress={() => validateAll()}
            style={styles.buttonstyle}
            color="#6200EE"
          />
      </View>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  title:{
    margin: 10,
    fontSize: 15,
    fontSize: 35
  },
  mainbox:{
    textAlign:'center',
    margin: 15,
  },
  textstyle:{
    fontSize: 18,
    marginBottom: 20,
  },
  labelText:{
    marginTop: 10,
    marginBottom: 5,
  },
  inputText:{
    height:45,
    marginBottom: 15,
  },
  buttonstyle:{
    marginTop: 10,
  },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20 ,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
  },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6
  },
  button: {
    borderRadius: 4,
    padding: 8,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#C82333",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  }
});
