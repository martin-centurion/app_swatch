import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { themes } from '../Global/Themes'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen 
                    name='Shop'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            console.log(focused);
                            return (
                                <View>
                                    <Fontisto name="shopping-store" size={24} color={focused ? "white" : "gray"} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Cart'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Foundation name="shopping-cart" size={30} color={focused ? "black": "gray"} />    
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
        backgroundColor: themes.primary,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    }
  })