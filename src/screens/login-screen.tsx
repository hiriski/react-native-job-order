import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import FocusAwareStatusBar from '@/components/focus-aware-status-bar';
import { MainLayout } from '@/components/layouts';
import { useNavigation } from '@react-navigation/native';
import Text from '@/components/ui/text';
import ScreenHeader from '@/components/screen-header';
import LoginForm from '@/components/auth/login-form';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
});

export default LoginScreen;
