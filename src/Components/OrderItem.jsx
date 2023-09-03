import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { themes } from "../Global/Themes";


const OrderItem = ({ order, total, updatedAt }) => {

    return (
        <View style={styles.card}>
                <View>
                    <FlatList
                        data={order}
                        keyExtractor={(cartItem) => cartItem.id}
                        renderItem={({ item }) => {
                        return <View style={styles.orderContainer}>
                                    <Text style={styles.ordetTitle}>
                                    Nombre: {item.title}
                                    </Text>
                                    <View style={styles.detailOrder}>
                                        <Image 
                                            source={{ uri: item.images[0] }}
                                            style={styles.image}
                                            resizeMode="cover"
                                        />
                                        <Text style={styles.text}>
                                            x {item.quantity} - ${item.price}
                                        </Text>
                                        
                                    </View>
                                </View>;
                            }}
                            showsVerticalScrollIndicator={false}
                    />
                    <View style={styles.footerContainer}>
                        <Text style={styles.priceText}>Total ${parseFloat(total).toFixed(3)}</Text>
                        <Text style={styles.textDate}>{updatedAt}</Text>
                    </View>
                </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: '100%',
        backgroundColor: themes.green,
        padding: 50,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderContainer: {
        paddingVertical: 20
    },
    footerContainer: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: themes.primary,
        borderRadius: 20,
        alignItems: 'center'
    },
    ordetTitle: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold'
    },
    textDate: {
        fontFamily: "Poppins-Bold",
        fontSize: 12,
        color: themes.white,
    },
    priceText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: themes.white,
        marginBottom: 10
    },
    detailOrder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: "Poppins-Bold",
        fontSize: 24,
        color: themes.primary,
    },
    image: {
        width: 130,
        height: 130
    },
});