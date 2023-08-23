import React from "react";
import Header from '../Components/Header'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../Screens/Cart";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import Welcome from "../Components/Welcome";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
