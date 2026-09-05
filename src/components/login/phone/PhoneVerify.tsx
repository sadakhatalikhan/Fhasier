import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopRightStyle from '../../common/TopRightStyle'
import { PhoneVerifyIcon } from '../../../../assets/Icons'
import { vs, s } from 'react-native-size-matters'
import DynamicButton from '../../common/DynamicButton'
import { TextInput } from 'react-native-gesture-handler'
import GoBack from '../../common/GoBack'

const PhoneVerify = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
  return (
    <SafeAreaView>
        <TopRightStyle />
        <GoBack navigationScreen={"PhoneNumberLoginScreen"}/>
        <View style={styles.container}>
            <PhoneVerifyIcon />
            <Text style={styles.phoneVerifyHeading}>Verify Your Phone</Text>
            <Text style={styles.caption}>Please enter the 4 digit code sent to +91 8989XX78780</Text>
            <View style={styles.otpContainer}>
            {otp.map((value, index) => (
                <TextInput
                key={index}
                style={styles.otpInput}
                value={value}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => {
                    const newOtp = [...otp];
                    newOtp[index] = text;
                    setOtp(newOtp);
                }}
                />
            ))}
            </View>
            <Text style={styles.time}>00:24</Text>
            <View style={{flexDirection: 'row', gap: s(10)}}>
                <Text style={styles.receiveCodeStyle}>Didn’t receive the code?</Text>
                <TouchableOpacity>
                    <Text style={{color: '#FF197D', fontSize: 16}}>Resend</Text>
                </TouchableOpacity>
            </View>
            <DynamicButton name={"Verify"} buttonNavigation={"HomeScreen"}/>
        </View>
      
    </SafeAreaView>
  )
}

export default PhoneVerify

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: vs(50)
    },
    phoneVerifyHeading: {
        fontSize: 28,
        marginTop: vs(10),
        marginBottom: vs(10)
    },
    caption: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        width: '80%'
    },
    time: {
        fontSize: 16,
        color: '#FF197D',
    },
    receiveCodeStyle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: vs(10)
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(20),
        gap: s(10),
        marginBottom: vs(10)
      },
      
      otpInput: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: 'MulishBold',
        fontSize: 20,
      },
})