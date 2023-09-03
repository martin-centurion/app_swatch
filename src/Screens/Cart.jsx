import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CartItem from '../Components/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderItem } from "../Features/Order/orderSlice";
import { usePostCartMutation } from '../Services/shopServices'
import { themes } from '../Global/Themes'
import { removeFullCart } from '../Features/Cart/cartSlice'
import AddButton from "../Components/AddButton";


const Cart = ({ navigation }) => {

    const { items: allCart, total, user, updatedAt, orderId }= useSelector(state => state.cartReducer.value);
    const { localId } = useSelector(state => state.userReducer.value)
    const [ triggerPostCart, result ] = usePostCartMutation();
    const dispatch = useDispatch();
  
    const onConfirm = () => {
      triggerPostCart({allCart, total, user: localId, updatedAt, orderId});
      dispatch(addOrderItem({allCart, total, updatedAt, isCheckout: true}));
      dispatch(removeFullCart());
    }

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(removeFullCart())
        }
    }, [result])

    

  return (
    <View style={styles.cartContainer}>
        {   allCart.length !== 0 ? (
            <>
            <FlatList 
                data={allCart}
                keyExtractor={cardItem => cardItem.id}
                renderItem={({ item }) => (
                    (
                        <CartItem 
                            cartItem={ item }
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
                            $ {parseFloat(total).toFixed(3)}
                    </Text>
                </View>
            </View>
            </>
        ) : 
        <View style={styles.emptyContainer}>
            <Text>Su carrito esta vacio</Text>
            <AddButton
                title="Ir a la tienda"
                onPress={() => navigation.navigate('Home')}
            />
        </View> 
        }
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
    },
    emptyContainer: {
        backgroundColor: themes.pink,
        padding: 50,
        margin: 50,
        borderRadius: 20
    }
})