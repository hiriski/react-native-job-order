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
      <RNView>
        <Typography variant="h1" style={StyleSheet.flatten([styles.textStyle, styles.textCount])}>
          {item.jo_count || 0}
        </Typography>
        <Typography style={StyleSheet.flatten([styles.textStyle, styles.textLabel])}>{item.label}</Typography>
      </RNView>
      <RNView>
        <Ionicons name="flash-sharp" size={40} style={styles.icon} />
      </RNView>
    </Pressable>
  );
};

const { shape, palette } = createTheme();
const styles = StyleSheet.create({
  root: {
    height: 94,
    width: 182,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: createSpacing(3),
    paddingHorizontal: createSpacing(4),
    paddingTop: createSpacing(4),
    borderRadius: shape.borderRadius,
    flexDirection: 'row',
  },
  textStyle: {
    color: palette.primary.contrastText,
  },
  textCount: {
    fontSize: 30,
    marginTop: -10,
  },
  textLabel: {
    fontSize: 15,
  },
  icon: {
    color: palette.primary.contrastText,
  },
});

export default CardJobOrderStatusItem;
