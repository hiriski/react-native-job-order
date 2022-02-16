import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen, HomeScreen, AccountScreen } from '../screens';
import { NAVIGATION } from '../constants';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';
import { SafeAreaProvider } from '../components/providers';
// import { createStackNavigator } from '@react-navigation/stack';

export interface RootStackParamList {
  main: undefined;
  home: undefined;
}

const RootStack = createNativeStackNavigator();
// const Stack = createStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const RootStackNavigation: FC = () => (
  <SafeAreaProvider>
    <RootStack.Navigator screenOptions={navigationOptions}>
      <RootStack.Group>
        <RootStack.Screen name={NAVIGATION.HOME} component={HomeScreen} options={{
          title: "Home Screen",
        }} />
        <RootStack.Screen name={NAVIGATION.SETTINGS} component={SettingsScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name={NAVIGATION.ACCOUNT} component={AccountScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  </SafeAreaProvider>
);

export default RootStackNavigation;
