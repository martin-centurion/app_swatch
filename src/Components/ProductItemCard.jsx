import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themes } from '../Global/Themes'

const ProductItemCard = ( {children} ) => {
  return (
    <View style={styles.cardContainer}>
      { children }
    </View>
  )
}

export default ProductItemCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: 350,
        height: 120,
        padding: 20,
        borderRadius: 10,
        backgroundColor: themes.terciary,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    }
})