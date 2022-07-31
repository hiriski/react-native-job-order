import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth screens.
import { LoginScreen } from './screens';

// Navigation object
import { AUTH_STACK } from '@/config/navigators';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator: FC = () => (
  <AuthStack.Navigator initialRouteName={AUTH_STACK.LOGIN} screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name={AUTH_STACK.LOGIN} component={LoginScreen} />
  </AuthStack.Navigator>
);
