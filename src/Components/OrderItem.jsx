import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { themes } from "../Global/Themes";


const OrderItem = ({ order }) => {

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.updatedAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${order.total}</Text>
                <View>
                    <Text>{order.id}</Text>
                    <Text>{order.user}</Text>
                </View>
            </View>
            <View style={styles.iconsOrder}>
                <SimpleLineIcons name="eye" size={20} color={themes.primary} />
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: themes.green,
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
        color: themes.primary
    },
    iconsOrder: {
        padding: 10
    }
});