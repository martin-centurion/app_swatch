import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { themes } from "../Global/Themes";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Features/Counter/counterSlice";

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.value);


    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={() => dispatch(increment())}    
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            {/* <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                    onChangeText={setInputToAdd}
                    value={inputToAdd}
                />
                <Pressable 
                    style={styles.button}
                    onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable
                    style={styles.button}
                    onPress={() => {}}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable> */}
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'flex-start',
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 5,
        backgroundColor: themes.green,
        borderRadius: 50
    },
    span: {
        width: "40%",
        padding: 10,
        textAlign: "center",
        fontSize: 14,
        fontFamily: 'Poppins-Bold'
    },
    spanInput: {
        backgroundColor: themes.secondary,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: themes.primary
    },
});