import React, { FC, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK } from '@config/navigators';
import { IconButton, MenuItem, Text, MaterialIcon } from '@components/ui';
import { grey } from '@app/lib/theme/colors';
import useTheme from '@hooks/use-theme';
import FloatingActionButton from '@components/ui/floating-action-button';
import { createSpacing } from '@app/utils/theme';
import { useDispatch } from 'react-redux';
import { revokeTokenRequest } from '@app/store/auth/actions';
import { toggleDarkMode } from '@app/store/common/actions';
import { useAppSelector } from '@app/store/hook';
import userList from '@components/user/user-list';
import { fetchUserListRequest } from '@store/user/actions';
import { UserList } from '@components/user';
import { User } from '@app/interfaces/user';
import { fetchCustomerListRequest } from '@store/customer/actions';
import { CustomerList } from '@components/customer';

const backgroundColor = '#fbfbfb';

const CustomerListScreen: FC = () => {
  const dispatch = useDispatch();
  const { mode } = useAppSelector((state) => state.common);
  const { listCustomer: customerState } = useAppSelector((state) => state.customer);
  const navigation = useNavigation();
  const { palette } = useTheme();

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  useEffect(() => {
    dispatch(fetchCustomerListRequest());
  }, []);

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      <FocusAwareStatusBar
        barStyle={palette.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={palette.background.default}
      />

      {customerState.isFetching
        ? null
        : Array.isArray(customerState.data) &&
          customerState.data.length > 0 && <CustomerList customers={customerState.data} />}
      <FloatingActionButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
  switchControl: {
    flexDirection: 'row',
  },
});

export default CustomerListScreen;
