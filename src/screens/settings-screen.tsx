import React, { FC } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION } from '../constants';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
const backgroundColor = '#fbfbfb';

const SettingsScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <View>
        <Text style={styles.textTitle}>Settings Screen</Text>
        <Button title={'Go to account screen'} onPress={() => navigation.navigate(NAVIGATION.ACCOUNT)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor,
  },
  textTitle: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
  },
});

export default SettingsScreen;
