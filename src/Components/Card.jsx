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

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        height: 120,
        padding: 20,
        borderRadius: 10,
        backgroundColor: themes.hover,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20
    }
})