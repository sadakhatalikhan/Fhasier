import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import TopRightStyle from '../components/common/TopRightStyle'
import { vs } from 'react-native-size-matters'
import PhoneNumberForm from '../components/login/phone/PhoneNumberForm'

const PhoneNumberLoginScreen = () => {
  return (
    <SafeAreaView>
      <TopRightStyle />
      <GoBack navigationScreen={"WelcomeScreen"}/>
      <View style={styles.container}>
        <Text style={styles.phoneText}>Phone Number</Text>
        <Text style={styles.phoneDesc}>Please enter your phone number to verify your account</Text>
      </View>
      <PhoneNumberForm />
    </SafeAreaView>
  )
}

export default PhoneNumberLoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(50)
  },
  phoneText: {
    fontSize: 28
  },
  phoneDesc: {
    fontSize: 16,
    marginTop: vs(10),
    color: 'gray',
    textAlign: 'center',
    width: '80%',
    marginBottom: vs(30)
  }
})