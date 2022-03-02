import React, { FC } from 'react';
import View from '@components/ui/view';
import { StyleSheet, ViewProps } from 'react-native';
import { Typography } from '@components/ui/index';
import { blue } from '@app/lib/theme/colors';

interface Props extends ViewProps {
  size: number;
  color?: string;
}

const Avatar: FC<Props> = (props: Props) => {
  const { color } = props;
  return (
    <View style={StyleSheet.flatten([styles.root, { backgroundColor: color || blue[500] }])}>
      <Typography style={styles.textStyle}>Xa</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 100,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fbfbfb',
    marginTop: -4,
    letterSpacing: 0.5,
  },
});

export default Avatar;
