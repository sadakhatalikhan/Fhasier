import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import InputTextField from '../common/InputTextField'

const RegistrationFields = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <InputTextField placeholder={"Enter Email"} secureTextEntry={false}/>
      <Text style={styles.text}>Password</Text>
      <InputTextField placeholder={"Enter Password"} secureTextEntry={true}/>
      <Text style={styles.text}>Confirm Password</Text>
      <InputTextField placeholder={"Enter Password"} secureTextEntry={true}/>
    </View>
  )
}

export default RegistrationFields

const styles = StyleSheet.create({
    container: {
        padding: s(20)
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#88879C',
        marginBottom: 10
    }
})