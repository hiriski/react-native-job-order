import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import FocusAwareStatusBar from '@/components/focus-aware-status-bar';
import { MainLayout } from '@/components/layouts';
import { useNavigation } from '@react-navigation/native';
import Text from '@/components/ui/text';
import ScreenHeader from '@/components/screen-header';
import { amber } from '@/lib/theme/colors';
import LoginForm from '@/components/auth/login-form';
import { useDispatch } from 'react-redux';

const backgroundColor = '#fbfbfb';

const CustomerScreen: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <MainLayout>
        <ScreenHeader>
          <Text variant="h1">Customer</Text>
        </ScreenHeader>
      </MainLayout>

      <View style={styles.box}>
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
    backgroundColor: amber[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  icon: {
    marginVertical: 30,
    width: 52,
    height: undefined,
    aspectRatio: 1,
  },
});

export default CustomerScreen;
