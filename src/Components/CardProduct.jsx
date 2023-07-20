import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardProduct = () => {
  return (
    <View>
      <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Image
                        source={{ uri: product.images[1] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Image
                        source={{ uri: product.images[2] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Image
                        source={{ uri: product.images[3] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
    </View>
  )
}

export default CardProduct

const styles = StyleSheet.create({})