import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import InputTextField from '../common/InputTextField'
import DynamicButton from '../common/DynamicButton'

const ForgotPasswordForm = () => {
  return (
    <View>
        <InputTextField placeholder={"Enter Email"} secureTextEntry={false}/>
        <DynamicButton name={"Send"} buttonNavigation={"ForgotPasswordSuccessScreen"} />
    </View>
  )
}

export default ForgotPasswordForm

const styles = StyleSheet.create({})