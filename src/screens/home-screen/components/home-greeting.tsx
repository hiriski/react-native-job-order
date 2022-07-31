import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { createSpacing } from '@/utils/theme';
import { grey } from '@/lib/theme/colors';
import Ionicons from '@/components/ui/icon-ionicons';
import { Typography } from '@/components/ui';
import { useNavigation } from '@react-navigation/core';
import { ROOT_STACK } from '@/config/navigators';
import useTheme from '@/hooks/use-theme';
import { useAppSelector } from '@/store/hook';

const SampleAvatar = require('@/assets/images/avatars/24.jpg');

const AVATAR_SIZE = 60;

const { width, height } = Dimensions.get('screen');

export const HomeGreeting = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const { user } = useAppSelector((state) => state.auth);

  const onPress = () => {
    navigation.navigate(ROOT_STACK.NOTIFICATION_SCREEN as never);
  };

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.avatar} source={SampleAvatar} />
        <View style={{ marginLeft: createSpacing(4), maxWidth: 400 }}>
          <Typography style={{ color: '#fff' }}>Hello</Typography>
          <Typography style={{ color: '#fff', overflow: 'hidden', maxWidth: 240 }} variant="h3" numberOfLines={1}>
            {user?.name}
          </Typography>
        </View>
      </View>
      <TouchableNativeFeedback
        onPress={onPress}
        style={styles.touchableRoot}
        background={TouchableNativeFeedback.Ripple(grey[400], true, 80)}>
        <View style={styles.touchableInnner}>
          <Ionicons name="ios-notifications-outline" size={26} color={grey[100]} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: createSpacing(4),
    paddingBottom: createSpacing(4),
    marginLeft: createSpacing(6),
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: AVATAR_SIZE,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
  },
  touchableRoot: {
    alignItems: 'center',
  },
  touchableInnner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: createSpacing(6),
  },
});
