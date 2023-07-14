import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Home from './src/Screens/Home';

export default function App() {

  const [categoySelected, setCategorySelected] = useState('')

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
        {
          categoySelected ?
          <ItemListCategory 
              category={categoySelected}
              setCategory={setCategorySelected}
          /> :
          <Home 
            setCategorySelected={setCategorySelected}
          />
        }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});
