import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from '@components/ui';

const CreateCustomerScreen = () => {
  return (
    <View style={styles.root}>
      <Typography variant="h4">Create customer screen</Typography>
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

export default CreateCustomerScreen;
