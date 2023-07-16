import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Card from './Card';
import { themes } from '../Global/Themes';

const CategoryItem = ({
    item,
    navigation
}) => {

  const {width} = useWindowDimensions();

  return (
    <View style={{width: width, alignItems: 'center'}}>
      <Pressable
          onPress={() => navigation.navigate('ItemListCategory', {category: item})}
      >
        <Card>
              <Text style={styles.categoryText}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: themes.secondary
    }
})