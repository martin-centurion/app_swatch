import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import ProductItemCard from './ProductItemCard';

const ProductItem = ({ 
  item,
  navigation
}) => {
console.log(item);
  const onSelect = (id) => {
    
     navigation.navigate('ItemDetail', {productId: item.id, title: item.title})
  }

  const {width} = useWindowDimensions();

  return (
    <View style = {{width: width, alignItems: 'center'}}>
      <Pressable 
            onPress={() => onSelect(item.id)}
            >
            
            <ProductItemCard style={styles.container}>
                <View style={styles.containerProduct}>
                    <View style={styles.containerTextProduct}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textPrice}>${item.price}</Text>
                    </View>
                    <Image 
                      resizeMode='cover'
                      style = {styles.image}
                      source={{uri: item.images[0]}}
                    />
                </View> 
            </ProductItemCard>
      </Pressable>
    </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
      
  },
  containerProduct: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    width: 350
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    marginBottom: 3,
    width: '90%',
    color: themes.secondary
  },
  textPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: themes.secondary
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