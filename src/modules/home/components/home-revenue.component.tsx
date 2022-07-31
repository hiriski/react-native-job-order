import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { createSpacing } from '@/utils/theme';
import { green, grey } from '@/lib/theme/colors';
import Ionicons from '@/components/ui/icon-ionicons';
import { Typography, View } from '@/components/ui';
import { useNavigation } from '@react-navigation/core';
import { MAIN_STACK, ROOT_STACK } from '@/config/navigators';
import useTheme from '@/hooks/use-theme';
import { useAppSelector } from '@/store/hook';
import { auth_rootSelector } from '@/modules/auth/redux';
import { shape } from '@/config/theme/base';

const SampleAvatar = require('@/assets/images/avatars/24.jpg');

const AVATAR_SIZE = 60;

const { width, height } = Dimensions.get('screen');

export const HomeRevenue = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const { authenticatedUser } = useAppSelector((state) => auth_rootSelector(state));

  const onPress = () => {
    navigation.navigate(ROOT_STACK.NOTIFICATION_SCREEN as never);
  };

  const handlePressProfile = (): void => {
    navigation.navigate(
      ROOT_STACK.MAIN as never,
      {
        screen: MAIN_STACK.SETTINGS,
      } as never,
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Ionicons name="wallet-outline" size={46} color={green[700]} />
        <TouchableOpacity style={styles.touchableTextContainer} activeOpacity={0.75} onPress={handlePressProfile}>
          <Typography>Pendapatan (Bulan ini)</Typography>
          <Typography style={{ overflow: 'hidden', maxWidth: 240 }} variant="h2" numberOfLines={1}>
            Rp 99.999.999
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: createSpacing(4),
    marginBottom: createSpacing(4),
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: shape.borderRadius,
    padding: createSpacing(3),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  touchableTextContainer: {
    marginLeft: createSpacing(4),
  },
});
