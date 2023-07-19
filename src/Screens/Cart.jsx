import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CardItem'


const Cart = () => {

        const total = CartData.reduce((acc, currentItem) => acc += currentItem.price * currentItem.quantity, 0)  
  return (
    <View style={styles.cartContainer}>
        <FlatList 
            data={CartData}
            keyExtractor={cardItem => cardItem.id}
            renderItem={({item}) => (
                 (
                    <CartItem 
                        cartItem={item}
                    />
                )
            )}
        
        />
        <View style={styles.totalContainer}>
            <Pressable>
                <Text>
                    Total de su compra
                </Text>
                <Text>
                    $ {total}
                </Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 150
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})