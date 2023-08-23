import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { themes } from '../Global/Themes';

const Banner = ({
  navigation
}) => {



  return (
    <View style={styles.containerBanner}>
      <Pressable
           onPress={() => navigation.navigate('ItemDetail', {productId: 11, title: 'Purity of Neon'})}
          >
          <View style={styles.containerBannerImage}>
            <Text style={styles.textBanner}>
              Purity of Neon.
            </Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.textButton}>Lo queres?</Text>
                <Feather name="arrow-right" size={24} color="black" />
            </View>
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
        backgroundColor: themes.secondary
    },
    containerBannerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        width: 350,
        height: 300,
        backgroundColor: themes.secondary,
        position: 'relative'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 180,
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        color: themes.primary,
        zIndex: 100,
        right: 90,
        top: 100
    },
    textButton: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        marginRight: 20
    },
    textBanner: {
        width: '60%',
        fontSize: 40,
        padding: 10,
        lineHeight: 40,
        color: themes.primary,
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        zIndex: 2,
        left: -10,
        top: 60
    },
    image: {
        width: 300,
        height: 300,
        position: 'absolute',
        left: 100
    }
})