import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH_STACK } from 'config/navigators';
import { ForgotPasswordScreen, LoginScreen } from '@app/screens';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator: FC = () => (
  <AuthStack.Navigator initialRouteName={AUTH_STACK.LOGIN} screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name={AUTH_STACK.LOGIN} component={LoginScreen} />
    <AuthStack.Screen name={AUTH_STACK.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
