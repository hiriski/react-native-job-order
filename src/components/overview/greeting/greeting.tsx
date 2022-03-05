import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { createSpacing } from '@utils/theme';
import { grey } from '@app/lib/theme/colors';
import Ionicons from '@components/ui/icon-ionicons';
import { Typography } from '@components/ui';
import { useNavigation } from '@react-navigation/core';
import { ROOT_STACK } from '@config/navigators';

const OverviewGreeting = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ROOT_STACK.NOTIFICATION_SCREEN as never);
  };

  const renderNotificationButton = (): JSX.Element => (
    <TouchableNativeFeedback
      onPress={onPress}
      style={styles.touchableRoot}
      background={TouchableNativeFeedback.Ripple(grey[400], true, 80)}>
      <View style={styles.touchableInnner}>
        <Ionicons name="ios-notifications-outline" size={30} color={grey[600]} />
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/100', width: 62, height: 62 }} />
        <View style={{ marginLeft: createSpacing(3) }}>
          <Typography variant="h5">Hello,</Typography>
          <Typography variant="h3" style={{ marginTop: -4 }}>
            Ujang Kaget 👋
          </Typography>
        </View>
      </View>
      {renderNotificationButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginLeft: createSpacing(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: createSpacing(4),
    marginBottom: createSpacing(4),
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 62,
  },
  touchableRoot: {
    alignItems: 'center',
  },
  touchableInnner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: createSpacing(6),
  },
});

export default OverviewGreeting;
