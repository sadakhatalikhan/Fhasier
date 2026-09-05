import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import { s } from 'react-native-size-matters'
import { GoogleIcon } from '../../../assets/Icons'
import { useNavigation } from '@react-navigation/native'

const ContinueOptions = () => {

    const Navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity style={styles.googleLinkStyle}>
        <View style={styles.googleOptionStyle}>
            <GoogleIcon />
            <Text style={styles.googleOptionTextStyle}>Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleLinkStyle} onPress={() => Navigation.navigate("EmailLoginScreen")}>
        <Text style={styles.googleOptionTextStyle}>Email</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ContinueOptions

const styles = StyleSheet.create({
    googleLinkStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        opacity: 0.8,
        width: s(300),
        marginBottom: s(20)
    },
    googleOptionStyle: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: s(5) 
    },
    googleOptionTextStyle: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000000'
    }
})