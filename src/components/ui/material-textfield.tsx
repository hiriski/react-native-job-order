import React, { FC } from 'react';
import { StyleSheet, TextStyle } from 'react-native';

import { TextField, FilledTextField, OutlinedTextField, TextFieldProps } from 'rn-material-ui-textfield';
import { createTheme } from '@config/theme';
import useTheme from '@hooks/use-theme';

interface Props extends TextFieldProps {
  variant: 'standard' | 'filled' | 'outlined';
  isError?: boolean;
  helperText?: string | undefined;
  errorMessage?: string | undefined;
}

const MaterialTextField: FC<Props> = (props: Props) => {
  const { variant, isError, errorMessage, helperText } = props;
  const { palette } = useTheme();

  if (variant === 'outlined') {
    return (
      <OutlinedTextField
        {...props}
        inputContainerStyle={styles.inputContainer}
        style={styles.input}
        labelTextStyle={styles.label}
        tintColor={palette.primary.main}
        title={helperText}
        error={isError ? errorMessage : ''}
      />
    );
  } else if (variant === 'filled') {
    return (
      <FilledTextField
        {...props}
        inputContainerStyle={styles.inputContainer}
        style={styles.input}
        labelTextStyle={styles.label}
        tintColor={palette.primary.main}
        title={helperText}
        error={isError ? errorMessage : ''}
      />
    );
  } else {
    return (
      <TextField
        {...props}
        inputContainerStyle={styles.inputContainer}
        style={styles.input}
        labelTextStyle={styles.label}
        tintColor={palette.primary.main}
        title={helperText}
        error={isError ? errorMessage : ''}
      />
    );
  }
};

const theme = createTheme();

const textStyle: TextStyle = {
  color: theme.palette.text.primary,
  fontFamily: 'PlusJakartaSans-SemiBold',
  fontWeight: '500',
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
  },
  input: textStyle,
  label: textStyle,
});

MaterialTextField.defaultProps = {
  variant: 'standard',
  isError: false,
  helperText: undefined,
  errorMessage: undefined,
};

export default MaterialTextField;
