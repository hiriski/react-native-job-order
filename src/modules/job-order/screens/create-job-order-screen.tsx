import React from 'react';
import { Typography, View } from '@/components/ui';
import { ImageBackground, StatusBar, StyleSheet, ScrollView } from 'react-native';

export const CreateJobOrderScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      {/* <ImageBackground source={image} style={styles.backgroundImage} /> */}
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Typography variant="h1">Buat Job Order</Typography>
        <Typography>Testtest</Typography>
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
