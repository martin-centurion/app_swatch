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
        width: 170,
        height: 40,
        borderRadius: 10,
        backgroundColor: themes.green,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 35
    }
})