import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <ItemListCategory />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});
