import React, { FC, ReactNode } from 'react';
import { Text as RNText } from 'react-native';
import useTheme from '../../hooks/use-theme';
import { Typography } from '../../contexts/theme-context';
import { getTypographyFontSize } from '../../utils/theme/typography';

interface Props {
  variant?: keyof Typography;
  children: ReactNode;
}

const Text: FC<Props> = ({ variant, children }: Props) => {
  const { typography, palette } = useTheme();

  return (
    <RNText
      style={{
        fontSize: variant ? getTypographyFontSize(variant) : typography.body,
        fontWeight: variant?.startsWith('h') ? '700' : '500',
        color: palette.mode !== 'dark' ? '#333' : '#fbfbfb',
      }}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  variant: 'body',
};

export default Text;
