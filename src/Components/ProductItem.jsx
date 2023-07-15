import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import { themes } from '../Global/Themes';

const ProductItem = ({ 
  item,
  setProductSelected,
  setCategorySelected
}) => {

  const onSelect = (id) => {
      setProductSelected(id)
      setCategorySelected("")
  }

  console.warn(setCategorySelected);

  return (
    <Pressable onPress={() => onSelect(item.id)}>
          <Card
            additionalStyle={styles.additionalStylesCard}
          >   
              <View style={styles.containerTextProduct}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textPrice}>${item.price}</Text>
              </View>
              <Image 
                resizeMode='cover'
                style = {styles.image}
                source={{uri: item.images[0]}}
              />
          </Card>
    </Pressable>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  containerTextProduct: {
    
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    marginBottom: 3,
    width: '90%'
  },
  textPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: themes.primary
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