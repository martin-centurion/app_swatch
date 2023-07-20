import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import categories from '../Data/categories.json';
import { themes } from '../Global/Themes';
import CategoryItem from '../Components/CategoryItem';
import Banner from '../Components/Banner';
import Counter from '../Components/Counter';

const Home = ({
    navigation
}) => {
  return (
    <View style={styles.containerHome}>
        <View>
            <Banner />
            <FlatList 
                data={categories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem item={item} navigation = {navigation} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
       flex: 2,
       alignItems: 'center'
    },
    categoryText: {
        color: themes.primary,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        letterSpacing: .5,
    }
})