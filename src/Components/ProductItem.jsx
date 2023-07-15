import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: item.images[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 18,
    fontFamily: 'Poppins-Light'
  },
  image: {
    height: 120,
    width: 100,
    borderRadius: 8
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  }
})