import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="red" />
        <ActivityIndicator size="large" color="purple" />
        <ActivityIndicator size="xxx-large" color="purple" />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderWidth:5
  }
});
