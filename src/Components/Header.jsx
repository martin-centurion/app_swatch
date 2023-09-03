import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../Features/User/userSlice';
import { deleteSession } from '../SQLite';

const Header = ({route, navigation }) => {

  let title;

  if (route.name === 'Home') title = "Bienvenidos a Swatch ©";
  if (route.name === 'Signup') title = "Registrarse";
  if (route.name === 'Login') title = "Login";
  if (route.name === 'ItemListCategory') title = route.params.category;
  if (route.name === 'ItemDetail') title = route.params.title;
  if (route.name === 'CartScreen') title = "Mí Carrito";
  if (route.name === 'OrderScreen') title = "Detalle de compra";
  if (route.name === 'My Profile') title = "Mi perfil";
  if (route.name === 'Image Selector') title = "Mi foto de perfil";
  if (route.name === 'Location Selector') title = "Mi foto de perfil";
  if (route.name === 'List Address') title = "Mi dirección";
  if (route.name === 'Welcome') title = "Bienvenidos a Swatch ©";

  const dispatch = useDispatch();
  const {email, localId} = useSelector(state => state.userReducer.value);

  const onSignout = async () => {
    try {
      console.log("delete sessions...");          
      const response = await deleteSession(localId)
      console.log(response);
      dispatch(signOut())
    } catch (error) {
      console.log('Error while sign out');
      console.log(error.message);
    }
  }

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.iconsHeaderContainer}>
            <View style={styles.iconHeader}>
                {
                  route.name !== 'Signup' && route.name !== 'Login' && route.name !== 'Home' && route.name !== 'Welcome' ?
                  <Pressable 
                      style={styles.pressable}
                      onPress={() => navigation.goBack()}>
                      <Ionicons name="arrow-back" size={28} color={themes.primary} />
                  </Pressable> : null
                }
                
            </View>
            <View style={styles.iconHeader}>
                  { email ?
                    <Pressable 
                      style={styles.pressable}
                      onPress={onSignout}>
                      <Feather name="user-x" size={28} color={themes.primary} />
                  </Pressable> : null
                  }
            </View>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: themes.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
    },
    headerTitle: {
        fontSize: 18,
        paddingLeft: 17,
        color: themes.primary,
        fontFamily: 'Poppins-Bold'
    },
    iconsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60
    },
    iconHeader: {
        padding: 15,
        marginRight: 10
    },
    pressable: {
        position: 'absolute',
        right: 20
    }
})