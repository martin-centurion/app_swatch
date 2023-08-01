import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import CategoryItem from '../Components/CategoryItem';
import Banner from '../Components/Banner';
import Counter from '../Components/Counter';
import { useGetCategoriesQuery } from '../Services/shopServices';

const Home = ({
    navigation
}) => {
    
    const {data: categories, isLoading, isError} = useGetCategoriesQuery();

    console.log(isLoading);
    console.log(isError);

  return (

    <View style={styles.containerHome}>
        <View style={styles.containerBody}>
            {/* <Counter /> */}
            <Banner />
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem item={item} navigation = {navigation} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    </View>
  )
}

export default Home;

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