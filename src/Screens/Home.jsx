import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { themes } from '../Global/Themes';
import CategoryItem from '../Components/CategoryItem';
import Banner from '../Components/Banner';
import { useGetCategoriesQuery } from '../Services/shopServices';
import { MaterialIcons } from '@expo/vector-icons';
import PopularItem from '../Components/PopularItem';

const Home = ({
    navigation
}) => {
    
    const {data: categories, isLoading, isError} = useGetCategoriesQuery();

    console.log(isLoading);
    console.log(isError);

  return (
    <ScrollView>
        <View style={styles.containerHome}>
            <View style={styles.containerBody}>
                {/* <Counter /> */}
                <Banner 
                    navigation={navigation}
                />
                <View style={styles.containerCategory}>
                    <View style={styles.containerTitleCategories}>
                        <Text style={styles.titleCategory}>Descubrir</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={themes.text} />
                    </View>
                    
                    <FlatList
                        data={categories}
                        keyExtractor={category => category}
                        renderItem={({item}) => <CategoryItem item={item} navigation = {navigation} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>

                <PopularItem
                    navigation={navigation}
                />

            </View>
        </View>
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
    containerHome: {
        alignItems: 'center',
        marginVertical: 5
     },
    containerCategory: {
        flexDirection: 'row',
        width: '100%'
    },
    containerTitleCategories: {
        width: 100,
        height: 70,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleCategory: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: themes.text,
        marginRight: 20
    },
    categoryText: {
        color: themes.primary,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        letterSpacing: .5,
    },
    image: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
      }
})