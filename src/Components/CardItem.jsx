import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { themes } from "../Global/Themes";

const CartItem = ({ cartItem }) => {
    console.log(cartItem);
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} {cartItem.quantity} Un.</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <View>
                <Image
                    source={{ uri: cartItem.images[0] }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.iconsCart}>
                <Feather name="x-circle" size={20} color={themes.terciary} />
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: themes.hover,
        padding: 20,
        margin: 10,
        borderRadius: 10,
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
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        color: themes.primary,
    },
    text2: {
        fontFamily: "Poppins-Bold",
        fontSize: 30,
        marginTop: 5,
        color: themes.terciary
    },
    image: {
        width: 80,
        height: 80
    },
    iconsCart: {
        padding: 5
    }
});