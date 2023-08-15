import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import { Feather } from '@expo/vector-icons';

const BannerItem = ({  }) => {
  
  return (
    <View style = {styles.containerDetail}>
              <View style={styles.mainContainer} >
                
                  <Image
                        source={{ uri: 'https://static.swatch.com/images/product/SB06W100/sa200/SB06W100_sa200_er005.png' }}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <View style = {styles.textContainer}>
                      <Text style = {styles.productTitle}>Purity of Neon</Text>
                      <Text style = {styles.productText} >Este reloj retro de gran tamaño está inspirado en un Swatch Chrono de los 90, el WHITE HORSES CHRONO SCW100. Su esfera neón multicolor y sus coloridas coronas resaltan sobre la caja y la correa de origen biológico color blanco puro.</Text>
                      
                    </View>
              </View>
            

              <Pressable 
                          style={styles.buttonAddProductContainer}
                          onPress={() => console.warn('Comprar')}
              >
                    <View style={styles.buttonAddProduct}>
                        <Text style={styles.textButton}>
                          Lo quiero!
                        </Text>
                        <Feather name="check" size={24} color={themes.primary} />
                     </View>
                     <Text style= {styles.productPrice}>$92.955</Text>
              </Pressable>
        
      </View>
  )
}

export default BannerItem

const styles = StyleSheet.create({
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