import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Card from './Card';
import { themes } from '../Global/Themes';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../Features/Shop/shopSlice';

const CategoryItem = ({
    item,
    navigation
}) => {
 

  const {width} = useWindowDimensions();

  const dispatch = useDispatch()

  const onSelectCategory = () => {
      dispatch(setCategorySelected(item.category));
      navigation.navigate('ItemListCategory', {category: item.category});
  }

  return (
    
    <View style={styles.container}>
      <Pressable
          onPress={onSelectCategory}
      >
        <Card>

          <View style={styles.categoryContainer}>
              <View>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Image 
                resizeMode='cover'
                style = {styles.image}
                source={{uri: item.images}}
              />
          </View>

        </Card>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 15
    },
    categoryContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: "center"
    },
    categoryText: {
      width: 80,
      margin: 10,
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      color: themes.primary
    },
    image: {
      width: 80,
      height: 80
    }
})