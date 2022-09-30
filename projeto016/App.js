import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const carrosJSON = [
    { id: 1, marca: "Saab", anoFabrica:2017, combustivel: "Gasolina", preco: 5 },
    { id: 2, marca: "Volvo", anoFabrica:2019, combustivel: "Gasolina", preco: 2 },
    { id: 3, marca: "BMW", anoFabrica: 2012, combustivel: "Diesel" , preco: 3},
    { id: 4, marca: "Vw", anoFabrica: 2020, combustivel: "Gasolina", preco: 3 },
    { id: 5, marca: "Toyota",anoFabrica:2022, combustivel: "GNV", preco: 3 },
    { id: 6, marca: "Audi",anoFabrica:2022, combustivel: "GNV", preco: 1 },
    { id: 7, marca: "Audi TT",anoFabrica:2022, combustivel: "GNV", preco: 1 },    
  ];
  //console.log(carrosJSON.find((carro) => carro.anoFabrica > 2019));
  //console.log(carrosJSON.some((carro) => carro.anoFabrica > 2019));
  //console.log(carrosJSON.some((carro) => carro.anoFabrica < 1980));

  //console.log(carrosJSON.every((carro) => carro.anoFabrica > 2019));
  //console.log(carrosJSON.every((carro) => carro.anoFabrica > 1980));

  //console.log(carrosJSON.some((carro) => carro.marca.includes("Audi")));
  //console.log(carrosJSON.some((carro) => carro.marca.includes("Fiat")));

  //console.log(carrosJSON.every((carro) => carro.marca.includes("Audi")));
  //console.log(carrosJSON.every((carro) => carro.marca.includes("Fiat")));

//  var AchaCarro = carrosJSON.find((carro) => carro.anoFabrica > 2019);

//console.log(carrosJSON.filter((carro) => carro.marca.includes("Audi")));

//console.log(carrosJSON.filter((carro) => carro.marca.includes("Audi")));

console.log( carrosJSON.reduce((total, carro) => total + carro.preco, 0)); 

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
      <Text>---
        {"\n"}
        {carrosJSON.map(({ marca, combustivel }) => (
         `Marca do carro ${marca} combustível ${combustivel}.\n`
        ))}
        {"\n"}
      ---</Text>
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
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  }  
});
