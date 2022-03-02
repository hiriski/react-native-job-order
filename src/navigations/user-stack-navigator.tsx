import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen, UserDetailScreen } from '@screens/index';
import { USER_STACK } from '@config/navigators';

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ title: 'List of Users' }} name={USER_STACK.USER_LIST} component={UserListScreen} />
      <Stack.Screen options={{ headerShown: false }} name={USER_STACK.USER_DETAIL} component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;
