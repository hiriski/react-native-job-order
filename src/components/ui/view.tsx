import useTheme from '@app/hooks/use-theme';
import React, { FC } from 'react';
import { View as RNView, ViewProps } from 'react-native';

type Props = ViewProps;

const View: FC<Props> = (props: Props) => {
  const { palette } = useTheme();
  return (
    <RNView style={{ backgroundColor: palette.background.default }} {...props}>
      {props.children}
    </RNView>
  );
};

export default View;
