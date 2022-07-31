import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator, UserStackNavigator } from './navigators';
import { ROOT_STACK } from '@/config/navigators';
import { useAppSelector } from '@/store/hook';
import { GuideScreen, NotificationScreen, InvoiceScreen } from '@/screens/index';
import { View, Text } from 'react-native';
import useTheme from '@/hooks/use-theme';
import { useIsConnected } from 'react-native-offline';

// Auth stack
import { AuthStackNavigator } from '@/modules/auth';
import { auth_rootSelector } from './modules/auth/redux';

const RootStack = createNativeStackNavigator();

export const RootStackNavigator: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => auth_rootSelector(state));
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
