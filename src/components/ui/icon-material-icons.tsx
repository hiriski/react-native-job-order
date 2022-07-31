import useTheme from '@/hooks/use-theme';
import React, { FC } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MaterialIcon: FC<IconProps> = (props: IconProps) => {
  const { palette } = useTheme();
  return <Icon color={palette.text.primary} {...props} />;
};

export default MaterialIcon;
