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
        backgroundColor: themes.primary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: themes.secondary,
        fontFamily: 'Poppins-Bold',
        fontSize: 22
    },
});