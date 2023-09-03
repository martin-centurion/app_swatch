import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { themes } from '../Global/Themes';
import { insertSession } from "../SQLite";

const LoginScreen = ({navigation}) => {
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation();
    
    const onSubmit = () => {

        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
        else setErrorPassword('')
    };

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {
                    //Insert session in SQLite database
                    const response = await insertSession({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                    })
                    console.log(response);
                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                        }
                    }))
                }
            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [resultSignIn])

  return (
    <View style={styles.main}>
        <View>
            <Image 
                source={{ uri: 'https://static.swatch.com/images/product/SYXG113/sa000/SYXG113_sa000_er003.png'}}
                style={styles.imageBackground}
                resizeMode="contain"
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputForm 
                label={"email"}
                onChange={(email)=> setEmail(email)}
                error={errorEmail}
            />
            <InputForm 
                label={"password"}
                onChange={(password)=> setPassword(password)}
                error={errorPassword}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Confirmar"
            />
            <Text style={styles.sub}>¿No tenes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Registrarse</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        color: themes.primary
    },
    sub: {
        fontSize: 14,
        color: themes.primary
    },
    subLink: {
        fontSize: 14,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'
    },
    imageBackground: {
        position: 'absolute',
        backgroundColor: themes.green,
        top: -280,
        left: -390,
        width: 900,
        height: 900,
        zIndex: -1
    }
})