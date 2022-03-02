import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import useTheme from '@hooks/use-theme';
import { Typography } from '@app/interfaces/theme';
import { getTypographyFontSize } from '@utils/theme';
import { getTextColor } from '@utils/theme/colors-utils';

interface Props {
  variant?: keyof Typography;
  color?: 'primary' | 'secondary' | 'disabled';
  children: ReactNode;
  style?: TextStyle;
  fontSize?: number | undefined;
}

const Text: FC<Props> = ({ variant, color, style, fontSize, children }: Props) => {
  const { palette } = useTheme();

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.text,
        variant
          ? {
              color: color ? getTextColor(color, palette.mode) : palette.text.primary,
              ...getTypographyFontSize(variant as keyof Typography),
            }
          : {},
        style,
      ])}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontWeight: '600',
  },
});

Text.defaultProps = {
  variant: 'body',
  color: 'primary',
  fontSize: undefined,
};

export default Text;
