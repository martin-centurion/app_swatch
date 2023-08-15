import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { themes } from "../Global/Themes";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";
import { Feather } from '@expo/vector-icons';

const ItemDetail = ({ route }) => {

    const {productId: idSelected} = route.params;

    const dispatch = useDispatch()
    
    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait");
    const {width, height} = useWindowDimensions();

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

    const onAddCart = () => {
        dispatch(addCartItem({
          ...product, 
          quantity: 1
        }))
        console.log('onPress');
    }

    return (
      <View style = {styles.containerDetail}>
            {product ? (
            <>
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    
                  
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <View style = {styles.textContainer}>
                      <Text style={styles.textEnvio}>Envío Gratis</Text>
                      <Text style = {styles.productTitle}>{product.title}</Text>
                      <Text style = {styles.productText} >{product.description}</Text>
                    </View>
                </View>
            
            

                <Pressable 
                          style={styles.buttonAddProductContainer}
                          onPress={onAddCart}
              >
                    <View style={styles.buttonAddProduct}>
                        <Text style={styles.textButton}>
                          Lo quiero!
                        </Text>
                        <Feather name="check" size={24} color={themes.primary} />
                     </View>
                     <Text style= {styles.productPrice}>$92.955</Text>
              </Pressable>
              </>
              ) : null}
        
      </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
  containerDetail: {
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
    borderRadius: 20,
    margin: 30,
    padding: 15,
    backgroundColor: themes.primary
  },
  mainContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15
  },
  textContainer: {
    paddingHorizontal: 30
  },
  textEnvio: {
    width: 100,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: themes.secondary,
    color: themes.secondary,
    position: 'absolute',
    top: -310,
    left: 10
  },
  productTitle: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: themes.secondary,
    marginBottom: 15
  },
  productText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: themes.secondary,
    letterSpacing: 1,
    marginBottom: 15
  },
  buttonAddProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  productPrice: {
    width: 150,
    fontSize: 25,
    marginLeft: 20,
    fontFamily: 'Poppins-Bold',
    color: themes.terciary
  },
  buttonAddProduct: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 180,
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: themes.secondary,
    borderWidth: 2,
    color: themes.primary,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginRight: 10
  }
})