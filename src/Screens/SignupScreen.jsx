import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { themes } from "../Global/Themes";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
/* import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/singupSchema"; */

const SignupScreen = ({ navigation }) => {
    
    

    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    console.log(result);

    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email);
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatPasswordCorrect = password === confirmPassword

            if (isValidVariableEmail && isCorrectPassword && isRepeatPasswordCorrect) {

                console.log(email, password, confirmPassword);
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }

            if (!isValidVariableEmail) setErrorMail ('Email is not correct')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')
            if (!isRepeatPasswordCorrect) setErrorConfirmPassword ('Password must match')
            else setErrorConfirmPassword('')

        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <InputForm 
                    label={"Email"} 
                    onChange={setEmail} 
                    error={errorMail} />
                <InputForm
                    label={"Password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"Confirmar Password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Confirmar" />
                <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Clickea aquí para ingresar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.white,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Poppins-Bold",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: themes.primary,
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Poppins-Bold",
        color: themes.terciary,
    },
});