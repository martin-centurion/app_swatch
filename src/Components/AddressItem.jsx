import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import React from "react";
import { themes } from "../Global/Themes";


const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <View style={styles.containerAdress}>
                <Text style={styles.titleAdress}>Mi dirección</Text>
                <Text style={styles.subtitleAdress}>Puede editar su dirección clickeando sobre el siguiente botón.</Text>
                <View style={styles.card} onPress={() => {}}>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {location.address}
                        </Text>
                    </View>
                    <Pressable 
                        style={styles.buttonAddress}
                        onPress={onChangeLocation}
                    >
                        <FontAwesome5 name="edit" size={36} color={themes.primary} />
                    </Pressable>
                </View>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    containerAdress: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleAdress:{
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        padding: 20
    },
    subtitleAdress:{
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        padding: 20
    },
    card: {
        height: 200,
        width: 350,
        backgroundColor: themes.hover,
        padding: 20,
        margin: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: "black",
    },
    buttonAddress: {
        paddingRight: 20,
    },
});