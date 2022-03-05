import React from 'react';
import { Typography, View } from '@components/ui';
import { StyleSheet } from 'react-native';
import { createSpacing } from '@utils/theme';

const EditJobOrderScreen = () => {
  return (
    <View style={styles.root}>
      <Typography variant="h1">Edit Job Order Screen</Typography>
      <Typography>Scren ini nantinya digunakan untuk edit job order</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditJobOrderScreen;
