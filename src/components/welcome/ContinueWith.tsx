import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'

const ContinueWith = () => {
  return (
    <View>
      <Text style={styles.continueText}>ContinueWith</Text>
    </View>
  )
}

export default ContinueWith

const styles = StyleSheet.create({
    continueText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        marginBottom: vs(30)
    }
})