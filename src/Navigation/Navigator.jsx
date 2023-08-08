import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { themes } from '../Global/Themes'
import OrderStack from './OrderStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import MyProfileStack from './MyProfileStack'

const Tab = createBottomTabNavigator()

const Navigator = () => {

        const {email} = useSelector(state => state.userReducer.value)
         
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            {
                email ?
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
                                   <SimpleLineIcons name="home" size={24} color={focused ? themes.terciary : themes.primary} />
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
                                    <SimpleLineIcons name="bag" size={24} color={focused ? themes.terciary : themes.primary} />  
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Orders'
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <SimpleLineIcons name="list" size={24} color={focused ? themes.terciary : themes.primary} />   
                                </View>
                            )
                        }
                    }}
                />

                <Tab.Screen
                        name="MyProfile"
                        component={MyProfileStack}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={styles.item}>
                                        <Feather name="user" size={28} color={focused ? themes.terciary : themes.primary} />
                                    </View>
                                );
                            },
                        }}
                    />
            </Tab.Navigator>
            : <AuthStack />
            }
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
        backgroundColor: themes.white,
        bottom: 0,
        height: 60,
    }
  })