import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        flex: 2,
        backgroundColor: themes.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 20,
        color: themes.secondary,
        fontFamily: 'Poppins-Bold'
    }
})