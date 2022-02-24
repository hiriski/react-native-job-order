import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import useTheme from '@hooks/use-theme';
import { Typography } from '@app/interfaces/theme';
import { getTypographyFontSize } from '@utils/theme';
import { getTextColor } from '@utils/theme/colors-utils';
import { createTheme } from '@config/theme';

interface Props {
  variant?: keyof Typography;
  color?: 'primary' | 'secondary' | 'disabled';
  children: ReactNode;
  style?: TextStyle;
}

const Text: FC<Props> = ({ variant, color, style, children }: Props) => {
  const { palette } = useTheme();

  return (
    <RNText
      style={[
        styles.text,
        style,
        variant
          ? {
              ...getTypographyFontSize(variant as keyof Typography),
              color: color ? getTextColor(color) : palette.mode !== 'dark' ? palette.text.primary : '#fbfbfb',
            }
          : {},
      ]}>
      {children}
    </RNText>
  );
};

const theme = createTheme();

const styles = StyleSheet.create({
  text: {
    color: theme.palette.text.primary,
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontWeight: '600',
  },
});

Text.defaultProps = {
  variant: 'body',
  color: 'primary',
};

export default Text;
