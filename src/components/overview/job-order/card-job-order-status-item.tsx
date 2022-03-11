import React, { FC } from 'react';
import { View as RNView, StyleSheet, Pressable } from 'react-native';
import { Typography } from '@components/ui';
import type { JoStatus } from './card-job-order-status-list';
import { createSpacing } from '@utils/theme';
import { createTheme } from '@config/theme';
import Ionicons from '@components/ui/icon-ionicons';

interface Props {
  item: JoStatus;
}

const CardJobOrderStatusItem: FC<Props> = ({ item }: Props) => {
  const onPressItem = () => {
    console.log('item', item);
  };
  return (
    <Pressable onPress={onPressItem} style={StyleSheet.flatten([styles.root, { backgroundColor: item.color }])}>
      <RNView style={styles.container}>
        <RNView>
          <Typography variant="h1" style={StyleSheet.flatten([styles.textStyle, styles.textCount])}>
            {item.jo_count || 0}
          </Typography>
          <Typography variant="subtitle" style={styles.textStyle}>
            {item.label}
          </Typography>
        </RNView>
        <RNView>
          <Ionicons name="flash-sharp" size={40} style={styles.icon} />
        </RNView>
      </RNView>
    </Pressable>
  );
};

const { shape, palette } = createTheme();
const styles = StyleSheet.create({
  root: {
    minWidth: 160,
    marginRight: createSpacing(3),
    paddingHorizontal: createSpacing(4),
    paddingTop: createSpacing(4),
    borderRadius: shape.borderRadius,
  },
  container: {
    minHeight: 98,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: palette.primary.contrastText,
  },
  textCount: {
    fontSize: 30,
  },
  icon: {
    color: palette.primary.contrastText,
  },
});

export default CardJobOrderStatusItem;
