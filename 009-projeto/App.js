import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text>Visao inicial</Text>
      <View style={styles.container2}>
        <Text>Primeiro</Text>
        <View style={styles.container3}>
          <Text>Segundo{'\n'}Terceiro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'grey',
    margin: 15,
  },
  container2: {
    backgroundColor: 'red',
    margin: 5,
  },
  container3: {
    backgroundColor: 'green',
    margin: 5,
  },
});
