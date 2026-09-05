import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import { ForgotPasswordIcon } from '../../assets/Icons'
import { vs } from 'react-native-size-matters'
import TopRightStyle from '../components/common/TopRightStyle'
import ForgotPasswordForm from '../components/forgotpassword/ForgotPasswordForm'

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView>
      <TopRightStyle/>
      <GoBack navigationScreen={"EmailLoginScreen"}/>
      <View style={styles.container}>
        <ForgotPasswordIcon />
        <Text style={styles.text}>Forgot Password?</Text>
        <Text style={styles.caption}>Don’t worry! It happens. Please enter the address associated with your account.</Text>
        <ForgotPasswordForm />
      </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(50)
  },
  text: {
    fontSize: 25,
    marginTop: vs(20)
  },
  caption: {
    fontSize: 15,
    marginTop: vs(10),
    textAlign: 'center',
    width: '90%',
    color: '#88879C',
    marginBottom: vs(20)
  }
})