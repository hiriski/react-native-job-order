import React, { FC, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import { useAppSelector } from 'store/hook';
import ScreenHeader from 'components/screen-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@app/hooks/use-theme';
import OverviewEarning from '@components/overview/earning/earning';

const OverviewScreen: FC = () => {
  // const navigation = useNavigation();
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { listTodo } = useAppSelector((state) => state.sample);
  // const { todos } = listTodo;

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={palette.primary.main} />
      <ScreenHeader
        title="Overview"
        containerStyle={{ backgroundColor: palette.primary.main }}
        textStyle={{ color: palette.primary.contrastText }}
      />
      <OverviewEarning />
      <MainLayout>
        {/*<Button*/}
        {/*  title={'GO TO LOGIN SCREEN'}*/}
        {/*  onPress={() => navigation.navigate(ROOT_STACK.AUTH as never, { screen: AUTH_STACK.LOGIN } as never)}*/}
        {/*/>*/}

        {/* <TabViewExample /> */}
      </MainLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default OverviewScreen;
