import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import { Ionicons } from '@expo/vector-icons';

const Header = ({route, navigation}) => {

  let title;

  if (route.name === 'Home') title = "Bienvenidos a Swatch ©";
  if (route.name === 'ItemListCategory') title = route.params.category;
  if (route.name === 'ItemDetail') title = route.params.title;
  if (route.name === 'CartScreen') title = "Tu Carrito";
  if (route.name === 'OrderScreen') title = "Ordenes de Compra";

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
          {
            route.name !== 'Home' ? 
            <Pressable 
              style={styles.pressable}
              onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={themes.secondary} />
            </Pressable> : null
          }
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        padding: 30,
        backgroundColor: themes.primary,
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle: {
        fontSize: 18,
        color: themes.white,
        fontFamily: 'Poppins-Medium'
    },
    pressable: {
        backgroundColor: themes.terciary,
        padding: 17,
        borderRadius: 50,
        position: 'absolute',
        right: 10,
        top: '50%'
    }
})