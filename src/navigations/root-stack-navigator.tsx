import React, { FC, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from '@components/providers';
import { AuthStackNavigator, BottomTabNavigator, UserStackNavigator } from '.';
import { ROOT_STACK } from '@config/navigators';
import { useAppSelector } from '@store/hook';
// import { FingerPrintScreen } from '@screens/index';

const RootStack = createNativeStackNavigator();

const RootStackNavigator: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const initialRouteName = isAuthenticated ? ROOT_STACK.MAIN : ROOT_STACK.AUTH;

  return (
    <RootStack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <RootStack.Screen name={ROOT_STACK.MAIN} component={BottomTabNavigator} />
          <RootStack.Screen name={ROOT_STACK.USER} component={UserStackNavigator} />
        </>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name={ROOT_STACK.AUTH} component={AuthStackNavigator} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
