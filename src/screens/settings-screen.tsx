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
import ModalAbout from '@components/about/modal-about';
import Ionicons from '@components/ui/icon-ionicons';

const backgroundColor = '#fbfbfb';

const SettingsScreen: FC = () => {
  const dispatch = useDispatch();
  const { mode } = useAppSelector((state) => state.common);
  const navigation = useNavigation();
  const [visibleModalAbout, setVisibleModalAbout] = useState<boolean>(false);
  const { palette } = useTheme();

  const onBack = () => {
    navigation.goBack();
    // Alert.alert('Yeah');
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogout = () => {
    dispatch(revokeTokenRequest());
  };

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  const navigateToUserListScreen = () => {
    navigation.navigate(ROOT_STACK.USER as never, { screen: USER_STACK.USER_LIST } as never);
  };

  const navigateToGuideScreen = () => {
    navigation.navigate(ROOT_STACK.GUIDE_SCREEN as never);
  };

  const navigateToInvoiceScreen = () => {
    navigation.navigate(ROOT_STACK.INVOICE_SCREEN as never);
  };

  const onCloseModalAbout = () => {
    setVisibleModalAbout(false);
  };

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      <FocusAwareStatusBar
        barStyle={palette.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        // backgroundColor={palette.background.default}
      />
      <ScreenHeader title="Settings" enableBackButton={true} onBack={onBack} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MenuItem
          title="Enable Dark Mode"
          enableSwitch={true}
          switchValue={mode === 'dark'}
          onPress={handleToggleDarkMode}
          renderStartIcon={<MaterialIcon name="bedtime" size={22} />}
        />
        <MenuItem
          title="List User"
          onPress={navigateToUserListScreen}
          renderStartIcon={<MaterialIcon name="people" size={22} />}
        />
        <MenuItem title="Log out" onPress={handleLogout} renderStartIcon={<MaterialIcon name="logout" size={22} />} />
        <MenuItem
          title="About"
          onPress={() => setVisibleModalAbout(true)}
          renderStartIcon={<MaterialIcon name="info-outline" size={22} />}
        />
        <MenuItem
          title="Cara Penggunaan"
          onPress={navigateToGuideScreen}
          renderStartIcon={<MaterialIcon name="help-outline" size={22} />}
        />
        <MenuItem
          title="Invoice"
          onPress={navigateToInvoiceScreen}
          renderStartIcon={<Ionicons name="receipt" size={22} />}
        />
        <TextInput placeholder="hello world" />
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
      <FloatingActionButton />
      <ModalAbout visible={visibleModalAbout} onCloseModal={onCloseModalAbout} />
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

export default SettingsScreen;
