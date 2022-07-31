import React from 'react';
import { Typography, View } from '@/components/ui';
import { Image, StyleSheet } from 'react-native';
import { createSpacing } from '@/utils/theme';

const image = require('../assets/icons/notification.png');

const NotificationScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.image} />
      <Typography variant="h1">Notification Screen</Typography>
      <Typography>Ini adalah screen notifiaction</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    marginBottom: createSpacing(4),
  },
});

export default NotificationScreen;
