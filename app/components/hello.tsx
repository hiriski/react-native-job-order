import React, { FC } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

const backgroundColor = '#0a90fe';

const Hello: FC = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
    <View>
      <Text style={styles.smallText}>Hello 👋,</Text>
      <Text style={styles.bigText}>Job Order App</Text>
      <Text style={styles.textFooter}>Made ❤ with React Native</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor,
  },
  smallText: {
    fontSize: 16,
    color: '#fbfbfb',
  },
  bigText: {
    fontSize: 28,
    color: '#fbfbfb',
    fontWeight: '600',
  },
  textFooter: {
    marginTop: 30,
    color: '#fbfbfb',
  },
});

export default Hello;
