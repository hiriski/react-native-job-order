import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

type Props = {
  onClick: () => void,
}

const backgroundColor = '#0a90fe';

const Button: FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustomPressable,
      ]}>
      {({ pressed }) => <Text style={styles.pressableText}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  },
  pressableText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperCustomPressable: {
    borderRadius: 3,
    padding: 10,
    textAlign: 'center',
  },
});

export default Button;
