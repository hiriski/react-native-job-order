import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string
}

const AppName: FC<Props> = ({ name }: Props) => (
  <View>
    <Text style={styles.text}>{ name }</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    color: '#fbfbfb',
    fontWeight: '700',
  },
});

export default AppName;
