import React, { FC, useEffect } from 'react';
import { StyleSheet, Button, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';
import { MainLayout } from 'components/layouts';
import { useAppSelector } from 'store/hook';
import ScreenHeader from 'components/screen-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@/hooks/use-theme';
import OverviewEarning from '@/components/overview/earning/earning';
import { CardJobOrderStatusList } from '@/components/overview';
import OverviewGreeting from '@/components/overview/greeting/greeting';
import TestComponent from '@/components/test-component';
import { clearAsyncStorage } from '@/utils/storage';
import { Dimensions } from 'react-native';

const BackgroundImage = require('@/assets/images/SL-043021-42650-28.jpg');

const OverviewScreen: FC = () => {
  // const navigation = useNavigation();
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { listTodo } = useAppSelector((state) => state.sample);
  // const { todos } = listTodo;

  useEffect(() => {
    // clearAsyncStorage();
  }, []);

  const backgroundStyle = {
    backgroundColor: palette.background.paper,
  };

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.root])}>
      <FocusAwareStatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      {/* <ScreenHeader
        title="Overview"
        containerStyle={{ backgroundColor: palette.primary.main }}
        textStyle={{ color: palette.primary.contrastText }}
      /> */}

      <ImageBackground
        source={require('../assets/images/SL-043021-42650-28.jpg')}
        style={[StyleSheet.absoluteFillObject, styles.backgroundImage]}>
        <OverviewGreeting />
      </ImageBackground>
      <CardJobOrderStatusList />
      <TestComponent />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    // flex: 1,
  },
  backgroundImage: {
    width,
    height: 160,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});

export default OverviewScreen;
