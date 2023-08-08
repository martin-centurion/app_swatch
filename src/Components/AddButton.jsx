import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { themes } from "../Global/Themes";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = themes.primary,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderRadius: 15,
        backgroundColor: themes.terciary,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    text: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        color: themes.secondary,
    },
});
