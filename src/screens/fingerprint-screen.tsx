import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import FocusAwareStatusBar from '@/components/focus-aware-status-bar';
import { useNavigation } from '@react-navigation/native';
import Text from '@/components/ui/text';
import { blueGrey, grey, lightBlue } from '@/lib/theme/colors';
import { Button } from '@/components/ui';

const backgroundColor = blueGrey[200];

const AVATAR_SIZE = 90;

const FingerPrintScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <View style={styles.box}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/icons/man.png')} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <Text variant="h5">Authorization Required</Text>
          <Text variant="subtitle">Please touch the fingerprint sensor</Text>
          <Image source={require('../assets/icons/fingerprint.png')} style={styles.fingerPrintIcon} />
          <Button title="Cancel" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor,
  },
  box: {
    flex: 1,
    backgroundColor: grey[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 3,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  avatarContainer: {
    marginTop: -AVATAR_SIZE / 2,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: undefined,
    aspectRatio: 1,
  },
  fingerPrintIcon: {
    marginVertical: 32,
    width: 80,
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FingerPrintScreen;
