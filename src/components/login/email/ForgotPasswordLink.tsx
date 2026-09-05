import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordLink = () => {
    const Navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.container} onPress={() => Navigation.navigate("ForgotPasswordScreen")}>
      <Text style={styles.text}>Forgot Password?</Text>
    </TouchableOpacity>
  )
}

export default ForgotPasswordLink

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        paddingRight: s(20)
        
    },
    text: {
        color: '#FF197D',
        fontSize: 12,
        fontWeight: '500',
    }
})