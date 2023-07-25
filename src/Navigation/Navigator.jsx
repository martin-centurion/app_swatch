import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { themes } from '../Global/Themes'
import OrderStack from './OrderStack'

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
                                   <SimpleLineIcons name="home" size={24} color={focused ? themes.terciary : themes.hover} />
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
                                    <SimpleLineIcons name="bag" size={24} color={focused ? themes.terciary : themes.hover} />  
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
                                    <SimpleLineIcons name="list" size={24} color={focused ? themes.terciary : themes.hover} />   
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