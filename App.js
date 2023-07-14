import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontLoaded] = useFonts({
      'Poppins-Bold': require('./src/Assets/Fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('./src/Assets/Fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('./src/Assets/Fonts/Poppins-Light.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

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
