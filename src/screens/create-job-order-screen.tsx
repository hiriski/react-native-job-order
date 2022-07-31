import React from 'react';
import { Typography, View } from '@/components/ui';
import { StyleSheet } from 'react-native';
import { createSpacing } from '@/utils/theme';

const CreateJobOrderScreen = () => {
  return (
    <View style={styles.root}>
      <Typography variant="h1">Create Job Order Screen</Typography>
      <Typography>Screen ini nantinya digunakan untuk membuat job order</Typography>
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

export default CreateJobOrderScreen;
