import React, { FC, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK } from '@config/navigators';
import { IconButton, Text } from '@components/ui';
import { grey } from '@utils/theme/colors';
import useTheme from '@hooks/use-theme';
import FloatingActionButton from '@components/ui/floating-action-button';

const backgroundColor = '#fbfbfb';

const SettingsScreen: FC = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation();
  const { palette } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <ScreenHeader title="Settings" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 32 }}>
          <View style={styles.switchControl}>
            <Text style={{ flex: 1 }}>Enable Dark Mode</Text>
            <Switch
              trackColor={{ false: grey[400], true: palette.primary.light }}
              thumbColor={isEnabled ? palette.primary.main : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <IconButton />
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
          <Text variant="h1">Test Text</Text>
        </ScrollView>
        {/*<Button*/}
        {/*  title={'GO TO LOGIN SCREEN'}*/}
        {/*  onPress={() => navigation.navigate(ROOT_STACK.AUTH as never, { screen: AUTH_STACK.LOGIN } as never)}*/}
        {/*/>*/}
      </MainLayout>
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
