import React from 'react';
import { Typography, View } from '@/components/ui';
import { Image, StyleSheet } from 'react-native';
import { createSpacing } from '@/utils/theme';

const image = require('../assets/icons/user-guide.png');

const GuideScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.image} />
      <Typography variant="h1">Guide Screen</Typography>
      <Typography>Ini adalah halaman panduan penggunaan aplikasi</Typography>
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
    width: 85,
    height: undefined,
    aspectRatio: 1,
    marginBottom: createSpacing(4),
  },
});

export default GuideScreen;
