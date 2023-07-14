import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { themes } from '../Global/Themes';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")

  return (
    <View style ={styles.container}>
        <TextInput style ={styles.input} 
            placeholder='Buscar'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <FontAwesome name="search" size={24} color={themes.terciary} />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <FontAwesome5 name="eraser" size={24} color={themes.terciary} />
        </Pressable>
        <Pressable onPress={goBack}>
            <AntDesign name="back" size={24} color={themes.terciary} />
        </Pressable>
       { error ?
         <Text>
            {error}
        </Text>
        : null }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: themes.terciary,
        borderRadius: 10,
    }
})