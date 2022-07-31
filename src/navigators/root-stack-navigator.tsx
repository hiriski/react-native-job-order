import React, { FC, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackNavigator, BottomTabNavigator, UserStackNavigator } from '.';
import { ROOT_STACK } from '@/config/navigators';
import { useAppSelector } from '@/store/hook';
import { GuideScreen, NotificationScreen, InvoiceScreen } from '@/screens/index';
import { StatusBar, View, Text } from 'react-native';
import useTheme from '@/hooks/use-theme';
import { useIsConnected } from 'react-native-offline';

const RootStack = createNativeStackNavigator();

const RootStackNavigator: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  // const isAuthenticated = false;
  const initialRouteName = isAuthenticated ? ROOT_STACK.MAIN : ROOT_STACK.AUTH;
  const { palette } = useTheme();

  const isConnected = useIsConnected();

  if (isConnected) {
    return (
      <>
        <RootStack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <>
              <RootStack.Screen name={ROOT_STACK.MAIN} component={BottomTabNavigator} />
              <RootStack.Screen name={ROOT_STACK.USER} component={UserStackNavigator} />
              <RootStack.Screen name={ROOT_STACK.GUIDE_SCREEN} component={GuideScreen} />
              <RootStack.Screen name={ROOT_STACK.NOTIFICATION_SCREEN} component={NotificationScreen} />
              <RootStack.Screen name={ROOT_STACK.INVOICE_SCREEN} component={InvoiceScreen} />
            </>
          ) : (
            <RootStack.Group>
              <RootStack.Screen name={ROOT_STACK.AUTH} component={AuthStackNavigator} />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </>
    );
  } else {
    return (
      <View>
        <Text>You're offline</Text>
      </View>
    );
  }
};

export default RootStackNavigator;
