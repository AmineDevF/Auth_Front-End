
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/SignupScreen';



const Stack = createStackNavigator();


export const AuthStack = () => {
  return (
    <Stack.Navigator  headerMode='none'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
  
    </Stack.Navigator>
  )
}
