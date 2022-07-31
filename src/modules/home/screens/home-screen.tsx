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
import { Dimensions } from 'react-native';
import { JobOrderBottomSheetMenu, JobOrderCardItem } from '@/modules/job-order/components';
import { data } from '@/modules/job-order/data';
import { IJobOrder } from '@/modules/job-order/job-order.interface';
import { ListRenderItem, Text, View } from 'react-native';
import { HomeGreeting, HomeRevenue } from '../components';

const BackgroundImage = require('@/assets/images/SL-043021-42650-28.jpg');

export const HomeScreen: FC = () => {
  // const navigation = useNavigation();
  const { palette } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    // clearAsyncStorage();
  }, []);

  const backgroundStyle = {
    backgroundColor: palette.background.paper,
  };

  const renderItem: ListRenderItem<IJobOrder> = ({ item }) => <JobOrderCardItem item={item} />;

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={BackgroundImage} style={[StyleSheet.absoluteFillObject, styles.backgroundImage]} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeGreeting />
        <HomeRevenue />
        <CardJobOrderStatusList />
        {data.map((jobOrder) => (
          <JobOrderCardItem key={jobOrder.id} item={jobOrder as unknown as IJobOrder} />
        ))}
        {/* <FlatList
        // style={{ flex: 1 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        bounces={false}
      /> */}
      </ScrollView>
      <JobOrderBottomSheetMenu />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    width,
    height: 160,
    justifyContent: 'center',
    flex: 1,
  },
});
