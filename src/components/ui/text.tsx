import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text as RNText, TextProps, TextStyle } from 'react-native';
import useTheme from '@hooks/use-theme';
import { Typography } from '@app/interfaces/theme';
import { getTypographyFontSize } from '@utils/theme';
import { getTextColor } from '@utils/theme/colors-utils';

interface Props extends TextProps {
  variant?: keyof Typography;
  color?: 'primary' | 'secondary' | 'disabled';
  children: ReactNode;
  style?: TextStyle;
  fontSize?: number | undefined;
}

const Text: FC<Props> = (props) => {
  const { variant, color, style, fontSize, children, ...rest } = props;
  const { palette } = useTheme();

  return (
    <RNText
      {...rest}
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
