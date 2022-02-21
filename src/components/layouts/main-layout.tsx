import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }: Props) => {
  return <View style={[styles.root]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
});

export default MainLayout;
