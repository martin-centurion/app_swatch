import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../Services/orderServices'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

    const email = useSelector(state => state.userReducer.value.email)
    const { data: order, isLoading, isError} = useGetOrdersQuery(email)

    
    console.log(isError);
    console.log(isLoading);
    console.log(order);

  return (
    <View>
        <FlatList 
            data={order}
            keyExtractor={orderItem => orderItem.email}
            renderItem={({ item }) => {
                return (
                    <OrderItem 
                        order={ item }      
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})