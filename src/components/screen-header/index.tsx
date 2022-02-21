import Text from 'components/ui/text';
import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children?: ReactNode;
  title?: string;
}

const ScreenHeader: FC<Props> = ({ children, title }: Props) => {
  return <View style={styles.root}>{!children ? <Text variant="h1">{title}</Text> : children}</View>;
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 6,
  },
});

ScreenHeader.defaultProps = {
  children: null,
  title: undefined,
};

export default ScreenHeader;
