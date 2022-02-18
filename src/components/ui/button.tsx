import React, { FC } from 'react';
import { StyleSheet, Text, Pressable, PressableProps } from 'react-native';
import useTheme from '../../hooks/use-theme';

type Props = PressableProps;

const Button: FC<Props> = ({ onPress }: Props) => {
  const { palette } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? palette.primary.dark : palette.primary.main,
        },
        styles.wrapperCustomPressable,
      ]}>
      {({ pressed }) => (
        <Text style={[styles.pressableText, { color: '#fbfbfb' }]}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperCustomPressable: {
    borderRadius: 4,
    padding: 10,
    textAlign: 'center',
  },
});

export default Button;
