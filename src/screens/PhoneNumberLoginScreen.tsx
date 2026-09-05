import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'

const PhoneNumberLoginScreen = () => {
  return (
    <SafeAreaView>
      <GoBack navigationScreen={"Submit"}/>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  )
}

export default PhoneNumberLoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
})