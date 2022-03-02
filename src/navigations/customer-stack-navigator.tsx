import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomerListScreen, CustomerDetailScreen, CreateCustomerScreen } from '@screens/index';
const Stack = createStackNavigator();
import { CUSTOMER_STACK } from '@config/navigators';

const CustomerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CUSTOMER_STACK.CUSTOMER_LIST} component={CustomerListScreen} />
      <Stack.Screen name={CUSTOMER_STACK.CUSTOMER_DETAIL} component={CustomerDetailScreen} />
      <Stack.Screen name={CUSTOMER_STACK.CREATE_CUSTOMER} component={CreateCustomerScreen} />
    </Stack.Navigator>
  );
};

export default CustomerStackNavigator;
