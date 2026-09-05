import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../common/GoBack'
import { RegisterSuccessIcon } from '../../../assets/Icons'
import TopRightStyle from '../common/TopRightStyle'
import { vs, s } from 'react-native-size-matters'
import DynamicButton from '../common/DynamicButton'

const RegistrationSuccess = () => {
  return (
    <SafeAreaView>
        <TopRightStyle />
        <GoBack navigationScreen={"EmailLoginScreen"}/>
        <View style={styles.container}>
            <RegisterSuccessIcon />
        </View>
        <Text style={styles.text}>Yeah, Welcome</Text>
        <Text style={styles.caption}>
            You have successfully registered, managing your business is made easier with fasier
        </Text>
        <View style={styles.buttonContainer}>
        <DynamicButton name={"Finish"} buttonNavigation={"EmailLoginScreen"}/>
        </View>
    </SafeAreaView>
  )
}

export default RegistrationSuccess

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: vs(50)
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
    },
    caption: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: vs(10),
        marginHorizontal: s(20),
        color: 'gray'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: vs(30)
    }
})