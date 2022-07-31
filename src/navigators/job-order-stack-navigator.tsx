import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JobOrderListScreen, JobOrderDetailScreen, CreateJobOrderScren, EditJobOrderScreen } from '@/screens';
import { JOB_ORDER_STACK } from '@/config/navigators';

const Stack = createNativeStackNavigator();

const JobOrderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={JOB_ORDER_STACK.JOB_ORDER_LIST} component={JobOrderListScreen} />
      <Stack.Screen name={JOB_ORDER_STACK.DETAIL_JOB_ORDER} component={JobOrderDetailScreen} />
      <Stack.Screen name={JOB_ORDER_STACK.CREATE_JOB_ORDER} component={CreateJobOrderScren} />
      <Stack.Screen name={JOB_ORDER_STACK.UPDATE_JOB_ORDER} component={EditJobOrderScreen} />
    </Stack.Navigator>
  );
};

export default JobOrderStackNavigator;
