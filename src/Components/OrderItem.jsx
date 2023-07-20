import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { themes } from "../Global/Themes";


const OrderItem = ({ order }) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <View style={styles.iconsOrder}>
                <SimpleLineIcons name="eye" size={20} color={themes.secondary} />
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: themes.primary,
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
        fontFamily: "Poppins-Light",
        fontSize: 14,
        color: themes.secondary,
    },
    text2: {
        fontFamily: "Poppins-Bold",
        fontSize: 30,
        marginTop: 5,
        color: themes.terciary
    },
    iconsOrder: {
        padding: 10
    }
});