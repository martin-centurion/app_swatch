import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themes } from '../Global/Themes'
import { Feather } from '@expo/vector-icons';

const Welcome = ({
    navigation
}) => {
  return (  
            <View style={styles.container}>
                
                <View>
                    <Image 
                        source={{ uri: 'https://static.swatch.com/images/product/SB03G100/li1/SB03G100_li1_ec001.jpg'}}
                        style={styles.imageBackground}
                        resizeMode="contain"
                        blurRadius={5}
                    />
                </View>
                
                <View>
                    <View style={styles.containerText}>
                        <Text style={styles.title}>
                            Nuestro Mundo.
                        </Text>
                        <Text style={styles.text}>
                            ¡Acá vas a encontrar los Swatch más elegidos! Descubrí las tendencias.
                        </Text>
                    </View>
                    <Pressable
                            onPress={() => navigation.navigate('Login')}
                            style={styles.buttonContainer}
                    >
                            <View style={styles.button}>
                                <View>
                                    <Text style={styles.textButton}>Login</Text>
                                </View>
                                <View>
                                    <Feather name="arrow-right" size={24} color={themes.primary}/>
                                </View>
                            </View>
                    </Pressable>
                    <View style={styles.footerContainer}>
                            <Text style={styles.textFooter}>¿No tenes una cuenta? {' >'} </Text>
                            <Pressable
                                 onPress={() => navigation.navigate('Signup')}
                            >
                                <Text style={styles.textRegister}>Registrarse</Text>
                            </Pressable>
                    </View>
                </View>
            </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30
    },
    containerText: { 
        padding: 20
    },
    title: {
        fontSize: 60,
        fontFamily: 'Poppins-Bold',
        lineHeight: 70,
        color: themes.white
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: themes.white,
        marginBottom: 20
    },
    buttonContainer: {
        width: 350,
        backgroundColor: themes.green,
        padding: 25,
        borderRadius: 50,
        marginBottom: 30
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textButton: {
        fontSize: 17,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'

    },
    image: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        position: 'absolute',
        top: -90,
        left: -340,
        width: 900,
        height: 900,
        zIndex: -1
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textFooter: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        color: themes.white,
        marginBottom: 20
    },
    textRegister: {
        color: themes.green,
        fontFamily: 'Poppins-Bold'
    }
})