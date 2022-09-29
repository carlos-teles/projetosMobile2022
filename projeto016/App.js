import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const carrosJSON = [
    { id: 1, marca: "Saab", anoFabrica:2017 },
    { id: 2, marca: "Volvo", anoFabrica:2019 },
    { id: 3, marca: "BMW", anoFabrica: 2012 },
    { id: 4, marca: "Vw", anoFabrica: 2020 },
    { id: 5, marca: "Toyota",anoFabrica:2022 },
  ];

  const carros = new Array("Saab", "Volvo", "BMW", "Vw" , "Toyota");
  const carrosIdade = new Array(5, 3, 10, 2 , 0);
  var tamCarros = carros.length;
  //const pessoa = {firstName:"John", lastName:"Doe", age:46};
  //pessoa.firstName = "Alfredo";
  //{carros}{"\n"}{"\n"}
  //{pessoa.firstName}
  var textCarros = "";
  for (let i = 0; i < carros.length; i++) {
    textCarros +=  "Carro: " +carros[i] + " - Idade: " + carrosIdade[i] + "\n";
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!
        {"\n"}{tamCarros}{"\n"}
        {"\n"}{textCarros}{"\n"}
      </Text>
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
