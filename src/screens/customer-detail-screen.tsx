import React, { FC, useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, StatusBar, Alert, ToastAndroid, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK, USER_STACK } from '@config/navigators';
import { IconButton, MenuItem, Text, MaterialIcon } from '@components/ui';
import { grey } from '@app/lib/theme/colors';
import useTheme from '@hooks/use-theme';
import FloatingActionButton from '@components/ui/floating-action-button';
import { createSpacing } from '@app/utils/theme';
import { useDispatch } from 'react-redux';
import { revokeTokenRequest } from '@app/store/auth/actions';
import { toggleDarkMode } from '@app/store/common/actions';
import { useAppSelector } from '@app/store/hook';
import { useRoute } from '@react-navigation/native';
import { User } from '@app/interfaces/user';
import type { RouteProp } from '@react-navigation/native';
import { UserDetail } from '@components/user';
const backgroundColor = '#fbfbfb';

interface ParamList {
  UserDetail: {
    customer: User;
  };
}

const CustomerDetailScreen: FC = () => {
  const dispatch = useDispatch();
  const { params } = useRoute<RouteProp<ParamList, 'UserDetail'>>();
  const { mode } = useAppSelector((state) => state.common);
  const navigation = useNavigation();
  const { palette } = useTheme();

  const onBack = () => {
    navigation.goBack();
  };

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={palette.primary.main} />
      {/*<ScreenHeader title="User detail" enableBackButton={true} onBack={onBack} />*/}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <UserDetail user={params.customer} />
        <View style={{ paddingHorizontal: createSpacing(6) }}>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
          <Text variant="h3">Test Text</Text>
        </View>
      </ScrollView>
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

export default CustomerDetailScreen;
