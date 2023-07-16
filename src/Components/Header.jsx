import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Bienvenidos a Swatch</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        padding: 20,
        backgroundColor: themes.primary,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 20,
        color: themes.white,
        fontFamily: 'Poppins-Medium'
    }
})