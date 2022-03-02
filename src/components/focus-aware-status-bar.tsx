import React, { FC } from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import useTheme from '@app/hooks/use-theme';

const FocusAwareStatusBar: FC<StatusBarProps> = (props: StatusBarProps) => {
  const { palette } = useTheme();
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar {...props} /* barStyle={palette.mode === 'dark' ? 'light-content' : 'dark-content'} */ />
  ) : null;
};

export default FocusAwareStatusBar;
