import React, { FC } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import FocusAwareStatusBar from '@/components/focus-aware-status-bar';
import { MainLayout } from '@/components/layouts';
// import { useNavigation } from '@react-navigation/native';
import Text from '@/components/ui/text';
import ScreenHeader from '@/components/screen-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@/hooks/use-theme';
import { LoginForm } from '@/modules/auth/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { isIOS } from '@/utils/os';

export const LoginScreen: FC = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.palette.background.default} />
      {/* <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : 'height'}
        style={StyleSheet.flatten([styles.root, { backgroundColor: theme.palette.background.default }])}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <ScreenHeader title="Login" subtitle="Login untuk memulai aktivitas." />
      <LoginForm />
      {/* </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
