import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Home from './src/Screens/Home';
import ItemDetail from './src/Screens/ItemDetail';

export default function App() {

  const [categoySelected, setCategorySelected] = useState('');
  const [productSelected, setProductSelected] = useState('');

  const [fontLoaded] = useFonts({
      'Poppins-Bold': require('./src/Assets/Fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('./src/Assets/Fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('./src/Assets/Fonts/Poppins-Light.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header />
        {
          categoySelected ?
          <ItemListCategory 
              category={categoySelected}
              setCategory={setCategorySelected}
              setProductSelected={setProductSelected}
          /> :
          productSelected ?
          <ItemDetail
              idSelected= {productSelected}
              setProductSelected = {setProductSelected}
          /> :
          <Home 
            setCategorySelected={setCategorySelected}
          />
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
