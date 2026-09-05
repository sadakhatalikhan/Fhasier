import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import TopRightStyle from '../components/common/TopRightStyle'
import { vs } from 'react-native-size-matters'
import RegistrationFields from '../components/register/RegistrationFields'
import TermsAndConditions from '../components/register/TermsAndConditions'
import DynamicButton from '../components/common/DynamicButton'

const RegistrationScreen = () => {
  return (
    <SafeAreaView>
        <TopRightStyle />
        <GoBack navigationScreen={"EmailLoginScreen"}/>
        <View style={styles.container}>
            <Text style={styles.headingStyle}>Register</Text>
        </View>
        <RegistrationFields />
        <View style={styles.container1}>
            <TermsAndConditions />
            <DynamicButton name={"Register"} buttonNavigation={"RegisterSuccess"} />
        </View>
    </SafeAreaView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: vs(50)
    },
    container1: {
        alignItems: 'center',
        marginTop: vs(-20)
    },
    headingStyle: {
        fontSize: 32
    }
})