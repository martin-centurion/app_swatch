import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { themes } from "../Global/Themes";

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: themes.green,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '60%',
        marginTop: 15
    },
    text: {
        color: themes.primary,
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
});