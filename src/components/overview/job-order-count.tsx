import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui';

const JobOrder = () => {
  return (
    <View style={styles.root}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default JobOrder;
