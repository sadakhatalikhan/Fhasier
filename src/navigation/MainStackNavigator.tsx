import React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AppLandingPage from '../screens/AppLandingPage';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import PhoneNumberLoginScreen from '../screens/PhoneNumberLoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginSuccess from '../components/login/LoginSuccess';
import ForgotPasswordSuccessScreen from '../components/forgotpassword/ForgotPasswordSuccessScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import RegisterSuccess from '../components/register/RegistrationSuccess';

const Stack = createStackNavigator();

function MainStackNavigator ()  {
  return (
    <Stack.Navigator id='MainStack'
    screenOptions={{ headerShown: false }}
    initialRouteName='AppLandingPage'
    >
      <Stack.Screen name="AppLandingPage" component={AppLandingPage} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <Stack.Screen name="PhoneNumberLoginScreen" component={PhoneNumberLoginScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotPasswordSuccessScreen" component={ForgotPasswordSuccessScreen} />
      <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator

