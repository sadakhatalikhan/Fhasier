import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'

const WelcomeScreenHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeScreenAppName}>Fhasier</Text>
      <Text style={styles.welcomeScreenSlogan}>Cashier app for your business</Text>
    </View>
  )
}

export default WelcomeScreenHeading

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: vs(20)
    },
    welcomeScreenAppName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF197D'
    },
    welcomeScreenSlogan: {
        fontSize: 15,
        marginTop: 10,
        letterSpacing: 1
    }
})