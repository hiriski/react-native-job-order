import React from 'react';
import { Typography, View } from '@/components/ui';
import { ImageBackground, StatusBar, StyleSheet, ScrollView } from 'react-native';

const image = require('../assets/images/mika-baumeister-gjPSrg4xSNM-unsplash.jpg');

const JobOrderDetailScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground source={image} style={styles.backgroundImage} />
      <Typography variant="h1">Detail Job Order</Typography>
      <Typography>Scren ini nantinya digunakan untuk detail job order</Typography>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 160,
  },
});

export default JobOrderDetailScreen;
