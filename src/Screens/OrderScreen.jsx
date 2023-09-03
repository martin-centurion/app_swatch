import { StyleSheet, Text, View } from 'react-native'
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { themes } from '../Global/Themes';
import AddButton from "../Components/AddButton";

const OrderScreen = ({navigation}) => {

    const { items: allCart, total, updatedAt, isCheckout } = useSelector(state => state.orderReducer.value);

  return (
            <View>
                {
                isCheckout ? (
                    
                    <OrderItem 
                            order={allCart} 
                            total={total} 
                            updatedAt={updatedAt}  
                    /> 
                ) :
                
                <View style={styles.emptyContainer}>
                    <Text>Ups! aun no tiene una compra realizada</Text> 
                    <AddButton
                        title="Ir a la tienda"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                }
            </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    emptyContainer: {
        backgroundColor: themes.pink,
        padding: 50,
        margin: 50,
        borderRadius: 20
    }
})