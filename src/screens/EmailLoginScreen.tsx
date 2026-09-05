import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import { vs } from 'react-native-size-matters'
import TopRightStyle from '../components/common/TopRightStyle'
import LoginFields from '../components/login/email/LoginFields'
import DynamicButton from '../components/common/DynamicButton'
import ForgotPasswordLink from '../components/login/email/ForgotPasswordLink'
import RegisterLink from '../components/login/email/RegisterLink'

const EmailLoginScreen = () => {
  return (
    <SafeAreaView>
      <TopRightStyle />
      <GoBack navigationScreen={"WelcomeScreen"}/>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <LoginFields />
      <ForgotPasswordLink />
      <View style={styles.container}>
        <DynamicButton name = {"Login"} buttonNavigation={"LoginSuccess"}/>
      </View>
      <RegisterLink />
    </SafeAreaView>
  )
}

export default EmailLoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(30)
  },
  loginText: {
    fontSize: 32
  }
})