import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmailSentIcon } from '../../../assets/Icons'
import { vs } from 'react-native-size-matters'
import DynamicButton from '../common/DynamicButton'
import TopRightStyle from '../common/TopRightStyle'

const ForgotPasswordSuccessScreen = () => {
  return (
    <>
      <TopRightStyle />
      <SafeAreaView style={styles.container}>
        <EmailSentIcon />
        <Text style={styles.text}>Check Your Mail</Text>
        <Text style={styles.caption}>We have sent a password recover instructions to your email</Text>
        <DynamicButton name={"Finish"} buttonNavigation={"EmailLoginScreen"}/>
      </SafeAreaView>
    </>
  )
}

export default ForgotPasswordSuccessScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(120)
  },
  text: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: vs(30)
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