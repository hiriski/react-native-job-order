import React, { FC } from 'react';
import { StyleSheet, Text, Pressable, PressableProps } from 'react-native';
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
}

// @ts-ignore
const backgroundColor = (color?: ButtonColor, pressed: boolean): string => {
  return getButtonColor(color as ButtonColor, pressed);
};

const Button: FC<Props> = (props: Props) => {
  const { color, title, size } = props;
  const { palette } = useTheme();
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
      <Text style={[styles.buttonText, { color: palette.primary.contrastText }]}>{title}</Text>
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
};

export default Button;
