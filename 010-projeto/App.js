import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
   <SafeAreaView style={styles.container} >
    <View>
      <Text style={styles.title}>
        O título e o manipulador onPress são obrigatórios. Recomenda-se definir acessibilidadeLabel para ajudar a tornar seu aplicativo utilizável por todos.      
      </Text>
      <Button        title="Aperte"        onPress={() => alert('Botão Simples')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      Ajuste a cor de uma maneira que pareça padrão em cada plataforma. No iOS, o suporte de cor controla a cor do texto. No Android, a cor ajusta a cor de fundo do botão.
      </Text>
      <Button
        title="Aperte"        color="#f194ff"        onPress={() => alert('Botão com cor ajustada pressionado')}      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      Todas as interações para o componente estão desabilitadas.
      </Text>
      <Button        title="Aperte"        disabled        onPress={() => alert('Nao pode ser pressionado')}      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Essa estratégia de layout permite que o título defina a largura do botão.
      </Text>
      <View style={styles.fixToText}>
        <Button          title="Botão a esquerda"          onPress={() => alert('Botão a esquerda')}        />
        <Button          title="Botão a direita"          onPress={() => alert('Botão a direita')}        />
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },  
});
