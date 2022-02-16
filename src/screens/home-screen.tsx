import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  ToastAndroid,
  GestureResponderEvent, Dimensions,
} from 'react-native';
import AppName from '../components/app-name';
import { name as appName } from '../../app.json';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../constants';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

export type RootStackParamList = {
  main: undefined;
  home: undefined;
};

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'home'>;

const backgroundColor = '#0a90fe';

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenProps>();

  const onPress = (e: GestureResponderEvent): void => {
    ToastAndroid.show('Hello, I am Toast..', ToastAndroid.SHORT);
    console.log('e', e);
  };

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      <View style={styles.container}>
        <Text style={styles.smallText}>Hello 👋,</Text>
        <AppName name={appName} />
        <Text style={styles.textFooter}>Made ❤ with React Native</Text>

        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustomPressable,
          ]}>
          {({ pressed }) => <Text style={styles.pressableText}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
        </Pressable>
        <View style={styles.buttonContainer}>
          <Button
            title={'Go to settings'}
            onPress={() => navigation.navigate(NAVIGATION.SETTINGS as keyof RootStackParamList)}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  },
  container: {
    width: width / 1.5,
  },
  smallText: {
    fontSize: 16,
    color: '#fbfbfb',
  },
  bigText: {
    fontSize: 28,
    color: '#fbfbfb',
    fontWeight: '600',
  },
  textFooter: {
    marginTop: 30,
    color: '#fbfbfb',
  },
  buttonContainer: {
    marginTop: 22,
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
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default HomeScreen;
