import React, { FC, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK } from '@/config/navigators';
import { IconButton, MenuItem, Text, MaterialIcon } from '@/components/ui';
import { grey } from '@/lib/theme/colors';
import useTheme from '@/hooks/use-theme';
import FloatingActionButton from '@/components/ui/floating-action-button';
import { createSpacing } from '@/utils/theme';
import { useDispatch } from 'react-redux';
import { revokeTokenRequest } from '@/store/auth/actions';
import { toggleDarkMode } from '@/store/common/actions';
import { useAppSelector } from '@/store/hook';
import userList from '@/components/user/user-list';
import { fetchUserListRequest } from '@/store/user/actions';
import { UserList } from '@/components/user';
import { User } from '@/interfaces/user';

const backgroundColor = '#fbfbfb';

const UserListScreen: FC = () => {
  const dispatch = useDispatch();
  const { mode } = useAppSelector((state) => state.common);
  const { listUser: userState } = useAppSelector((state) => state.user);
  const navigation = useNavigation();
  const { palette } = useTheme();

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  useEffect(() => {
    dispatch(fetchUserListRequest());
  }, []);

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      <FocusAwareStatusBar
        barStyle={palette.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={palette.background.default}
      />

      {userState.isFetching
        ? null
        : Array.isArray(userState.data) && userState.data.length > 0 && <UserList users={userState.data} />}
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

export default UserListScreen;
