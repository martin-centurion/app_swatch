import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { themes } from '../Global/Themes'
import { useDispatch } from 'react-redux'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const dispatch = useDispatch();

    const [triggerSignIn, resultSignIn] = useState();
    const onSubmit = () => {

        const isValidVariableEmail = isValidEmail(email);
        const isCorrectPassword = isAtLeastSixCharacters(password)
        
        if(isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                resultSecureToken: true
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
            else setErrorEmail('')
            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')

    };

    useEffect(() => {
        if(resultSignIn.isSuccess) {
            dispatch(setUser({
                email: resultSignIn.data.email,
                idToken: resultSignIn.data.idToken
            }))
        }
    }, [resultSignIn])

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login to start</Text>
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
                title = "Send"
            />
            <Text style={styles.sub}>¿No tienes una cuenta?</Text>
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
        backgroundColor: themes.secondary,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
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
        color: themes.terciary,
    }
})