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
           onPress={() => navigation.navigate('ItemDetail', {productId: 22, title: 'Shades of Neon'})}
          >
          <View style={styles.containerBannerImage}>
            <Text style={styles.textBanner}>
              Shades of Neon.
            </Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.textButton}>Lo queres?</Text>
                <Feather name="arrow-right" size={20} color={themes.primary} />
            </View>
            <Image 
                resizeMode='contain'
                style = {styles.image}
                source={{uri: 'https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw7c643fc8/images/Swatch/collections/2023/neon/plp/colourful_page_d.jpg'}}
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
        position: 'relative'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 180,
        padding: 15,
        borderRadius: 50,
        backgroundColor: themes.pink,
        zIndex: 100,
        right: 90,
        top: 100
    },
    textButton: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        marginRight: 20,
        color: themes.primary
    },
    textBanner: {
        width: '60%',
        fontSize: 40,
        padding: 10,
        lineHeight: 40,
        color: themes.white,
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        zIndex: 2,
        left: -10,
        top: 60
    },
    image: {
        width: 950,
        height: 450,
        position: 'absolute',
        top: -80,
        right: -380
    }
})