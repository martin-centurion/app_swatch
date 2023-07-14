import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themes } from '../Global/Themes'

const Card = ( {children} ) => {
  return (
    <View style={styles.cardContainer}>
      { children }
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        height: 80,
        borderRadius: 10,
        backgroundColor: themes.terciary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }
})