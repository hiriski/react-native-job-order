import React, { FC } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import { AUTH_STACK, ROOT_STACK } from '@config/navigators';

const backgroundColor = '#feefc3';

const AccountScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <View>
        <Text style={styles.bigText}>Account Screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={'Go to home'}
            onPress={() => navigation.navigate(ROOT_STACK.AUTH as never, { screen: AUTH_STACK.LOGIN } as never)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor,
  },
  bigText: {
    fontSize: 22,
  },
  buttonContainer: {
    marginTop: 22,
  },
});

export default AccountScreen;
