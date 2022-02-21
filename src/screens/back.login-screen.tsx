import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import FocusAwareStatusBar from '@components/focus-aware-status-bar';
import { MainLayout } from '@components/layouts';
import { useNavigation } from '@react-navigation/native';
import Text from '@components/ui/text';
import ScreenHeader from '@components/screen-header';
import { amber } from '@utils/theme/colors';
import LoginForm from '@components/auth/login-form';
import { useDispatch } from 'react-redux';
import { revokeTokenRequest } from '@store/auth/actions';

const backgroundColor = '#fbfbfb';

const LoginScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <ScreenHeader>
          <Text variant="h1">Sign In</Text>
          <Text variant="body" color="secondary">
            Masuk untuk memulai aktivitas.
          </Text>
        </ScreenHeader>
      </MainLayout>

      <View style={styles.box}>
        <Text variant="h5">Job Order</Text>
        <Image source={require('../assets/icons/icon-invoices.png')} style={styles.icon} />
      </View>

      <LoginForm />
    </SafeAreaView>
  );
};

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
  box: {
    flex: 1,
    backgroundColor: amber[500],
    // height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  icon: {
    marginTop: 10,
    width: 100,
    height: undefined,
    aspectRatio: 1,
  },
});

export default LoginScreen;
