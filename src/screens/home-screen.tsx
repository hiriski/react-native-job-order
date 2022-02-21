import React, { FC, useRef, useCallback, useMemo, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text as RNText,
  SafeAreaView,
  ToastAndroid,
  GestureResponderEvent,
  Dimensions,
  LogBox,
  TextInput,
} from 'react-native';
import { name as appName } from '../../app.json';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchTodos, fetchTodosSuccess, setName } from '../store/sample/actions';
import { useDispatch } from 'react-redux';
import Todo from '../components/todo';
import Button from '../components/ui/button';
import Text from '../components/ui/text';
import { MainLayout } from '@components/layouts';
import ScreenHeader from '@components/screen-header';
import { revokeTokenRequest } from '@store/auth/actions';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export type RootStackParamList = {
  main: undefined;
  home: undefined;
};

// type HomeScreenProps = StackNavigationProp<RootStackParamList, 'home'>;

const backgroundColor = '#fbfbfb';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const { name, listTodo } = useAppSelector((state) => state.sample);
  const { todos } = listTodo;

  const onPress = (e: GestureResponderEvent): void => {
    ToastAndroid.show('Hello, I am Toast..', ToastAndroid.SHORT);
    console.log('e', e);
  };

  // useEffect(() => {
  //   // dispatch(fetchTodos());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  console.log(
    '⚡⚡ All state',
    useAppSelector((state) => state),
  );

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <ScreenHeader>
          <Text variant="subtitle" color="disabled">
            Good Morning 👋
          </Text>
          <Text variant="h2">Riski</Text>
        </ScreenHeader>
        <RNText>{name}</RNText>
        <RNText style={styles.textFooter}>Made ❤ with React Native</RNText>
        <Button onPress={onPress} />
        <TextInput value={name} placeholder="Input your name" onChangeText={(val) => dispatch(setName(val))} />
        <Todo todos={todos} />
      </MainLayout>
    </SafeAreaView>
  );
};;

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  },
  container: { width: width / 1.4 },
  smallText: {
    fontSize: 16,
    color: '#444',
  },
  bigText: {
    fontSize: 28,
    color: '#444',
    fontWeight: '600',
  },
  textFooter: {
    marginTop: 12,
    color: '#444',
  },
  buttonContainer: {
    marginTop: 10,
  },
  pressableText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperCustomPressable: {
    borderRadius: 3,
    padding: 10,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
