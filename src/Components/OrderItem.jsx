import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { themes } from "../Global/Themes";


const OrderItem = ({ order }) => {

    return (
        <View style={styles.card} onPress={() => {}}>
                <View style={styles.dateContainer}>
                    <Text style={styles.textDate}>
                        {new Date(order.updatedAt).toLocaleString()}
                    </Text>
                </View>
                <View style={styles.detailOrder}>
                    <View style={styles.textContainer}>
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
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 200,
        backgroundColor: themes.green,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        flexDirection: "colums",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateContainer: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 10
    },
    textDate: {
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        color: themes.primary,
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    detailOrder: {
        flexDirection: 'row',
        alignItems: 'center'
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