import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CardItem'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'
import { themes } from '../Global/Themes'


const Cart = () => {

    const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value);
    const [triggerPostCart, result] = usePostCartMutation();

    onConfirm = () => {
        triggerPostCart({items: CartData, total, user, updatedAt});
    }

    console.log(result);

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
            <View>
                <Pressable
                    style={styles.totalButton}
                    onPress={onConfirm}
                >
                    <Text style={styles.textButton}>
                        Comprar
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.titleButtonTotal}>
                        Total
                </Text>
                <Text style={styles.textButtonTotal}>
                        $ {total}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 20
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    totalButton: {
        backgroundColor: themes.primary,
        borderRadius: 10,
        width: 160,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: themes.secondary,
        fontSize: 14,
        fontFamily: 'Poppins-Bold'
    },
    titleButtonTotal: {
        color: themes.primary,
        fontFamily: 'Poppins-Medium',
        fontSize: 14
    },
    textButtonTotal: {
        color: themes.primary,
        fontFamily: 'Poppins-Bold',
        fontSize: 26
    }
})