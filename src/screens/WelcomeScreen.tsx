import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WelcomeScreenHeading from '../components/welcome/WelcomeScreenHeading'
import WelcomeLogoScreen from '../components/welcome/WelcomeLogoScreen'
import { s, vs } from 'react-native-size-matters'
import ContinueWith from '../components/welcome/ContinueWith'
import ContinueOptions from '../components/welcome/ContinueOptions'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
  const Navigation = useNavigation<any>();
  return (
    <>
      <SafeAreaView style={styles.headingContainer}>
        <WelcomeScreenHeading />
        <WelcomeLogoScreen />
        <ContinueWith />
        <ContinueOptions />
        <View style={styles.loginWithPhContainer}>
          <Text>Or login with</Text>
          <TouchableOpacity onPress={() => Navigation.navigate("PhoneNumberLoginScreen")}>
            <Text style={styles.phoneNumberText}>Phone Number</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    marginTop: vs(71)
  },
  loginWithPhContainer: {
    flexDirection: 'row',
    gap: s(3),
  },
  phoneNumberText: {
    color: '#FF197D',
  }
})