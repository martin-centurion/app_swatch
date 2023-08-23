import { StyleSheet, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';

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
        flexDirection: 'row',
        backgroundColor: themes.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 305,
        height: 200,
        margin: 15
    }
})