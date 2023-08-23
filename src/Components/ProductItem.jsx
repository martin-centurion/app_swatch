import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import ProductItemCard from './ProductItemCard';

const ProductItem = ({ 
  item,
  navigation
}) => {

  const onSelect = () => {   
     navigation.navigate('ItemDetail', {productId: item.id, title: item.title})
  }


  return (
    <View>
      <Pressable 
        onPress={() => onSelect(item.id)}
      >            
            <ProductItemCard>
                <View style={styles.containerProduct}>
                    <View>
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
  containerProduct: {
    flexDirection: 'row',
    alignItems: "center"
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    marginBottom: 3,
    marginHorizontal: 10,
    width: 80,
    color: themes.primary
  },
  textPrice: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: themes.primary,
    marginHorizontal: 10
  },
  image: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between'
  }
})