import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Card from './Card';
import { themes } from '../Global/Themes';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../Features/Shop/shopSlice';
import { Feather } from '@expo/vector-icons';

const CategoryItem = ({
    item,
    navigation
}) => {
 

  const {width} = useWindowDimensions();

  const dispatch = useDispatch()

  const onSelectCategory = () => {
      dispatch(setCategorySelected(item));
      navigation.navigate('ItemListCategory', {category: item});
  }

  return (
    
    <View style={styles.container}>
        <Pressable
            onPress={onSelectCategory}
        >
        <Card>

          <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{item}</Text>
              <View>
                <Feather name="plus" size={20} color={themes.primary} />
              </View>
          </View>

        </Card>
      </Pressable>
    </View>
  )
}

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 15
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center"
    },
    categoryText: {
      width: 80,
      margin: 10,
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: themes.primary
    }
})