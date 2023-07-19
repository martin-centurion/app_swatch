import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
        <View style={styles.iconsHeaderContainer}>
            <View style={styles.iconHeader}>
                {
                  route.name !== 'Home' ? 
                  <Pressable 
                      style={styles.pressable}
                      onPress={() => navigation.goBack()}>
                      <Ionicons name="arrow-back" size={28} color={themes.primary} />
                  </Pressable> : null
                }
            </View>
            <View style={styles.iconHeader}>
                  <Pressable 
                      style={styles.pressable}
                      onPress={() => {}}>
                      <Feather name="user" size={28} color={themes.primary} />
                  </Pressable> 
            </View>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: themes.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
    },
    headerTitle: {
        fontSize: 18,
        paddingLeft: 17,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'
    },
    iconsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60
    },
    iconHeader: {
        padding: 15,
        marginRight: 10
    },
    pressable: {
        position: 'absolute',
        right: 20
        //top: '60%'
    }
})