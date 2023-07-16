import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import { Ionicons } from '@expo/vector-icons';

const Header = ({route, navigation}) => {

  let title;

  if (route.name === 'Home') title = "Categorias";
  if (route.name === 'ItemListCategory') title = route.params.category;
  if (route.name === 'ItemDetail') title = route.params.title;

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
          {
            route.name !== 'Home' ? 
            <Pressable 
              style={styles.pressable}
              onPress={() => navigation.goBack()}>
              <Ionicons name="ios-chevron-back-outline" size={24} color={themes.secondary} />
            </Pressable> : null
          }
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: themes.primary,
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle: {
        fontSize: 20,
        color: themes.white,
        fontFamily: 'Poppins-Medium'
    },
    pressable: {
        backgroundColor: themes.terciary,
        padding: 19,
        position: 'absolute',
        right: 0,
        top: 0
    }
})