import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item}) => {
  return (
    <View>
      <Card>
             <Text style={styles.categoryText}>{item}</Text>
      </Card>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 18,
    }
})