import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomerScreen, InventoryScreen, OverviewScreen, SettingsScreen } from '../screens';
import { MAIN_STACK } from '@config/navigators';

const TabStack = createBottomTabNavigator();

const BottomTabNavigator: FC = () => (
  <TabStack.Navigator initialRouteName={MAIN_STACK.SETTINGS} screenOptions={{ headerShown: false }}>
    <TabStack.Screen name={MAIN_STACK.OVERVIEW} component={OverviewScreen} />
    <TabStack.Screen name={MAIN_STACK.CUSTOMER} component={CustomerScreen} />
    <TabStack.Screen name={MAIN_STACK.INVENTORY} component={InventoryScreen} />
    <TabStack.Screen name={MAIN_STACK.SETTINGS} component={SettingsScreen} />
  </TabStack.Navigator>
);

export default BottomTabNavigator;
