import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { shape } from '@config/theme';
import { grey } from '@utils/theme/colors';

interface Props {
  value: string;
  onChangeText: (text: string) => string;
}

const InputText: FC<Props> = (props: Props) => {
  const { onChangeText } = props;
  return (
    <TextInput
      {...props}
      style={styles.root}
      onChangeText={(val) => onChangeText(val)}
      value={props.value}
      placeholder="Email"
      keyboardType="numeric"
      autoComplete="off"
    />
  );
};

const styles = StyleSheet.create({
  root: {
    height: 42,
    borderColor: grey[400],
    borderWidth: 1,
    borderRadius: shape.borderRadius,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
});

export default InputText;
