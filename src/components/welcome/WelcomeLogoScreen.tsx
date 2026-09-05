import { StyleSheet, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'
import { WelcomeScreenLogoIcon } from '../../../assets/Icons'

const WelcomeLogoScreen = () => {
  return (
    <View style={styles.container}>
        <WelcomeScreenLogoIcon />
    </View>
  )
}

export default WelcomeLogoScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: vs(83)
    }
})