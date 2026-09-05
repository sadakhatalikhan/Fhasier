import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'
import InputTextField from '../../common/InputTextField';

const LoginFields = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fieldNameStyle}>Email</Text>
      <InputTextField placeholder={"Enter Email"} secureTextEntry={false}/>
      <Text style={styles.fieldNameStyle}>Password</Text>
      <InputTextField placeholder={"Enter Password"} secureTextEntry={true}/>
    </View>
  )
}

export default LoginFields

const styles = StyleSheet.create({
    container: {
        marginTop: vs(20),
        paddingHorizontal: 20
    },
    fieldNameStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#88879C',
        marginBottom: vs(10)
    }
})