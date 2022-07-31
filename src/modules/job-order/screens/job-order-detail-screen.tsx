import React from 'react';
import { Typography, View } from '@/components/ui';
import { ImageBackground, StatusBar, StyleSheet, ScrollView } from 'react-native';

export const JobOrderDetailScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      {/* <ImageBackground source={image} style={styles.backgroundImage} /> */}
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Typography variant="h1">Detail Job Order</Typography>
        <Typography>Scren ini nantinya digunakan untuk detail job order</Typography>
      </View>
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
