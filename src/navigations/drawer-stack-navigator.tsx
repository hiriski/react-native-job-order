import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomerListScreen, OverviewScreen } from '@app/screens';
import { DRAWER_STACK } from '@config/navigators';

const DrawerStack = createDrawerNavigator();

const DrawerStackNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name={DRAWER_STACK.OVERVIEW} component={OverviewScreen} />
      <DrawerStack.Screen name={DRAWER_STACK.CUSTOMER_LIST} component={CustomerListScreen} />
    </DrawerStack.Navigator>
  );
};

export default DrawerStackNavigator;
