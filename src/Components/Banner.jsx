import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';

const Banner = () => {
  
  return (
    <View style={styles.containerBanner}>
      <Pressable onPress={() => {}}>
        <View style={styles.containerBannerImage}>
          <Text style={styles.textBanner}>
              Nuevo Lanzamiento!
          </Text>
          <Image 
              resizeMode='cover'
              style = {styles.image}
              source={{uri: 'https://static.swatch.com/images/product/SB06W100/sa280/SB06W100_sa280_er003.png'}}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default Banner;

const styles = StyleSheet.create({
    containerBanner: {
        alignItems: 'center',
        backgroundColor: themes.primary
    },
    containerBannerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        width: 350,
        height: 300,
        backgroundColor: themes.primary,
        position: 'relative'
    },
    textBanner: {
        width: '50%',
        fontSize: 16,
        backgroundColor: themes.terciary,
        padding: 10,
        color: themes.secondary,
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        zIndex: 2,
        left: 10,
        top: 220
    },
    image: {
        width: 300,
        height: 300,
        position: 'absolute',
        left: 100
    }
})