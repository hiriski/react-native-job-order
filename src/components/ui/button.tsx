import React, { FC } from 'react';
import { StyleSheet, Text, Pressable, PressableProps, View, ActivityIndicator } from 'react-native';
import { getButtonColor, getButtonSize } from '@utils/theme/button';
import { createTheme } from '@config/theme';
import { ButtonSize, Palette } from '@app/interfaces/theme';
import useTheme from '@hooks/use-theme';

type ButtonColor = keyof Pick<Palette, 'primary' | 'secondary'>;
type ButtonVariant = 'contained' | 'outlined' | 'text';

interface Props extends PressableProps {
  color?: ButtonColor;
  variant?: ButtonVariant;
  uppercase?: boolean;
  title: string;
  size?: ButtonSize;
  loading?: boolean;
}

// @ts-ignore
const backgroundColor = (color?: ButtonColor, pressed: boolean): string => {
  return getButtonColor(color as ButtonColor, pressed);
};

const Button: FC<Props> = (props: Props) => {
  const { color, title, size, loading } = props;
  const { palette } = useTheme();

  const renderLoading = () => {
    return <ActivityIndicator size={24} color="#fbfbfb" />;
  };

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.root,
        {
          backgroundColor: backgroundColor(color, pressed),
          height: getButtonSize(size as ButtonSize),
        },
      ]}>
      {!loading ? (
        <Text style={[styles.buttonText, { color: palette.primary.contrastText }]}>{title}</Text>
      ) : (
        renderLoading
      )}
    </Pressable>
  );
};

const theme = createTheme();

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: theme.shape.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.5,
    fontWeight: '500',
  },
});

Button.defaultProps = {
  color: 'primary',
  uppercase: false,
  size: 'medium',
  variant: 'contained',
  loading: false,
};

export default Button;
