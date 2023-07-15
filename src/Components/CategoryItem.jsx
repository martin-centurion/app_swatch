import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({
    item,
    setCategorySelected
}) => {
  return (
    <Pressable
        onPress={() => setCategorySelected(item)}
    >
      <Card>
             <Text style={styles.categoryText}>{item}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    }
})