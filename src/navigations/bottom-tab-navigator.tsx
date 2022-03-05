import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InventoryScreen, OverviewScreen, SettingsScreen } from '../screens';
import { MAIN_STACK } from '@config/navigators';
import { CustomerStackNavigator } from '@navigations/index';
import JobOrderStackNavigator from '@navigations/job-order-stack-navigator';
import { RouteProp } from '@react-navigation/native';
import { IonIcons } from '@components/ui';

const TabStack = createBottomTabNavigator();

const screenOptions = (route: RouteProp<any>) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focus, color, size }) => {
      return <IonIcons name="logo-firebase" size={size} color={color} />;
    },
  };
};

const BottomTabNavigator: FC = () => (
  <TabStack.Navigator initialRouteName={MAIN_STACK.OVERVIEW} screenOptions={({ route }) => screenOptions(route)}>
    <TabStack.Screen name={MAIN_STACK.OVERVIEW} component={OverviewScreen} />
    <TabStack.Screen name={MAIN_STACK.JOB_ORDER} component={JobOrderStackNavigator} />
    <TabStack.Screen name={MAIN_STACK.CUSTOMER} component={CustomerStackNavigator} />
    <TabStack.Screen name={MAIN_STACK.INVENTORY} component={InventoryScreen} />
    <TabStack.Screen name={MAIN_STACK.SETTINGS} component={SettingsScreen} />
  </TabStack.Navigator>
);

export default BottomTabNavigator;
