import React, { FC, useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, StatusBar, Alert, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK } from '@config/navigators';
import { IconButton, MenuItem, Text } from '@components/ui';
import { grey } from '@app/lib/theme/colors';
import useTheme from '@hooks/use-theme';
import FloatingActionButton from '@components/ui/floating-action-button';
import { createSpacing } from '@app/utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { revokeTokenRequest } from '@app/store/auth/actions';

const backgroundColor = '#fbfbfb';

const SettingsScreen: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { palette } = useTheme();

  const [isEnableDarkMode, setIsEnableDarkMode] = useState(false);
  const toggleSwitch = () => setIsEnableDarkMode((previousState) => !previousState);

  const onBack = () => {
    Alert.alert('Yeah');
  };

  const onPressMenuItem = () => {
    // Alert.alert('Menu item pressed');
    ToastAndroid.show('Menu item pressed', ToastAndroid.LONG);
    setIsEnableDarkMode((previousState) => !previousState);
  };

  const handleLogout = () => {
    dispatch(revokeTokenRequest());
  };

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <ScreenHeader title="Settings" enableBackButton={true} onBack={onBack} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MenuItem
          title="Enable Dark Mode"
          enableSwitch={true}
          switchValue={isEnableDarkMode}
          onPress={onPressMenuItem}
          renderStartIcon={<Icon name="bedtime" size={24} />}
        />
        <MenuItem title="Log out" onPress={handleLogout} renderStartIcon={<Icon name="logout" size={24} />} />

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
