import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { themes } from "../Global/Themes";
import { AntDesign } from '@expo/vector-icons';

const ItemDetail = ({ navigation, route }) => {

    const {productId: idSelected} = route.params;
    
    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait")
    const {width, height} = useWindowDimensions()

    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

    console.log(orientation);

    useEffect(() => {
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
        );
        setProduct(productSelected);
    }, [idSelected]);


    return (
      <View style = {styles.containerDetail}>
            {product ? (
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                  
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style = {styles.textContainer}>
                      <Text style = {styles.productTitle}>{product.title}</Text>
                      <Text style = {styles.productText} >{product.description}</Text>
                      <Text style= {styles.productPrice}>${product.price}</Text>
                    </View>
                </View>
            ) : null}
            

                      <Pressable style={styles.buttonAddProductContainer}>
                          <Text style={styles.buttonAddProduct}>
                              Agregar Al Carrito
                          </Text>
                      </Pressable>
        
      </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
  containerDetail: {
    height: '90%'
  },
  buttonContainer: {
    alignItems: 'flex-end'
  },
  buttonBackProduct: {
    padding: 20,
    backgroundColor: themes.terciary
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  mainContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15
  },
  productTitle: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: themes.primary,
    marginBottom: 15
  },
  productText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: themes.text,
    letterSpacing: 1,
    marginBottom: 15
  },
  productPrice: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: themes.terciary
  },
  buttonAddProductContainer: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonAddProduct: {
    width: '100%',
    padding: 20,
    textAlign: 'center',
    backgroundColor: themes.terciary,
    color: themes.secondary,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  }
})