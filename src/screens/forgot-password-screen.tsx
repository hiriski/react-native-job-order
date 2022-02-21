import React, { FC } from 'react';
import { View, StyleSheet, SafeAreaView, Button } from 'react-native';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
import { MainLayout } from 'components/layouts';
import { useNavigation } from '@react-navigation/native';
import Text from '@components/ui/text';
import { AUTH_STACK, MAIN_STACK, ROOT_STACK } from '@config/navigators';

const backgroundColor = '#fbfbfb';

const ForgotPasswordScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <View>
          <Text variant="h2">Forgot Password</Text>
          <Button
            title={'Go to Login Screen'}
            onPress={() => navigation.navigate(ROOT_STACK.AUTH as never, { screen: AUTH_STACK.LOGIN } as never)}
          />
          <Button
            title={'Go to Settings'}
            onPress={() => navigation.navigate(ROOT_STACK.MAIN as never, { screen: MAIN_STACK.SETTINGS } as never)}
          />
        </View>
      </MainLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
