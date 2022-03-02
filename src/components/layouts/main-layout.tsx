import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@components/ui';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }: Props) => {
  return <View style={[styles.root]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
});

export default MainLayout;
