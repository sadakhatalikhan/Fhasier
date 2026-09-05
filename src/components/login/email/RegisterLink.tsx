import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RegisterLink = () => {
    const Navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() => Navigation.navigate("RegistrationScreen")}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterLink

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: '#FF197D',
        fontSize: 14,
        fontWeight: '500',
    }
})