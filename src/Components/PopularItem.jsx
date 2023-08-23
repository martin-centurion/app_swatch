import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { themes } from '../Global/Themes'

const PopularItem = ({
    navigation,
    item
}) => {

    //console.warn({item: item.title});

  return (
    <View>
            <View style={styles.containerTitlePopular}>
                <Text style={styles.titlePopular}>Destacados</Text>
            </View>

            <View style={styles.containerPopular}>

                <Pressable
                    onPress={() =>  navigation.navigate('ItemDetail', {productId: 13, title: 'Dark Spark'})}
                    style={styles.Popular}
                >    
                    <View>
                        <Image
                            source={{ uri: 'https://static.swatch.com/images/product/SYXB106/sa200/SYXB106_sa200_er005.png'}}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                                <Text style={styles.textPopular}>Dark Spark</Text>
                                <Text style={styles.textPopularPrice}>$111.995</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() =>  navigation.navigate('ItemDetail', {productId: 14, title: 'Big Bold'})}
                    style={styles.Popular}
                >   
                    <View>
                        <Image
                            source={{ uri: 'https://static.swatch.com/images/product/SB03N102/sa200/SB03N102_sa200_er005.png'}}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <View style={styles.textContainer}>
                                <Text style={styles.textPopular}>Big Bold</Text>
                                <Text style={styles.textPopularPrice}>$90.795</Text>
                        </View>
                    </View>
                </Pressable>
                    
            </View>
    </View>
  )
}

export default PopularItem

const styles = StyleSheet.create({
    containerPopular: {
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerTitlePopular: {
        width: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlePopular: {
        fontSize: 22,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'
    },
    Popular: {
        backgroundColor: themes.green,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        borderRadius: 15,
        height: 240,
        margin: 20
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPopular: {
        width: 50,
        padding: 5,
        fontSize: 13,
        color: themes.primary,
        fontFamily: 'Poppins-Medium'
    },
    textPopularPrice: {
        width: 100,
        padding: 5,
        fontSize: 18,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'
    },
    image: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
})