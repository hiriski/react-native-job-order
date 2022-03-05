import React, { FC, useEffect } from 'react';
import { StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import { useAppSelector } from 'store/hook';
import ScreenHeader from 'components/screen-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@app/hooks/use-theme';
import OverviewEarning from '@components/overview/earning/earning';
import { CardJobOrderStatusList } from '@components/overview';
import OverviewGreeting from '@components/overview/greeting/greeting';
import TestComponent from '@components/test-component';
import { clearAsyncStorage } from '@utils/storage';

const OverviewScreen: FC = () => {
  // const navigation = useNavigation();
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { listTodo } = useAppSelector((state) => state.sample);
  // const { todos } = listTodo;

  useEffect(() => {
    // clearAsyncStorage();
  }, []);

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.root, { ...backgroundStyle }])}>
      <FocusAwareStatusBar barStyle="dark-content" {...backgroundStyle} />

      {/*<ScreenHeader*/}
      {/*  title="Overview"*/}
      {/*  containerStyle={{ backgroundColor: palette.primary.main }}*/}
      {/*  textStyle={{ color: palette.primary.contrastText }}*/}
      {/*/>*/}

      <OverviewGreeting />
      <CardJobOrderStatusList />
      <TestComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
  },
});

export default OverviewScreen;
