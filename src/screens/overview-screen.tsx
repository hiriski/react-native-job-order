import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import { useAppSelector } from 'store/hook';
import Todo from 'components/todo';
import ScreenHeader from 'components/screen-header';
import { AUTH_STACK, ROOT_STACK } from '@config/navigators';
// import TabViewExample from '@app/components/overview/tab-view';

const backgroundColor = '#fbfbfb';

const OverviewScreen: FC = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation();
  const { listTodo } = useAppSelector((state) => state.sample);
  const { todos } = listTodo;

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <ScreenHeader title="Overview" />
        <Button
          title={'GO TO LOGIN SCREEN'}
          onPress={() => navigation.navigate(ROOT_STACK.AUTH as never, { screen: AUTH_STACK.LOGIN } as never)}
        />

        {/* <TabViewExample /> */}
        {/* <Todo todos={todos} /> */}
      </MainLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
});

export default OverviewScreen;
