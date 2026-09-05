import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {s} from 'react-native-size-matters'
import { Checkbox } from 'expo-checkbox'

const TermsAndConditions = () => {

    const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onValueChange={setChecked} style={{backgroundColor: "#F5F9FE"}}/>
      <Text style={styles.text}>I’m agree to the</Text>
      <Text style={styles.text1}>Terms of Service</Text>  
      <Text style={styles.text}>and</Text>
      <Text style={styles.text1}>Privacy Policy</Text>
    </View>
  )
}

export default TermsAndConditions

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: s(10)
    },
    text: {
        marginLeft: s(5),
        fontSize: 12
    },
    text1: {
        marginLeft: s(5),
        fontSize: 12,
        color: "#FF197D",
        fontWeight: "bold"
    }
})