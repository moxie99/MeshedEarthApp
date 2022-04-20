import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductsList from './Components/ProductsList';
import Header from './Components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductsList />
      <StatusBar style= "auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
