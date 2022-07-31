import React, { FC } from 'react';
import { View as RNView, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Typography } from '@/components/ui';
import { createSpacing } from '@/utils/theme';
import { createTheme } from '@/config/theme';
import Ionicons from '@/components/ui/icon-ionicons';
import useTheme from '@/hooks/use-theme';
import { IJobOrderStatus } from '@/modules/job-order/job-order.interface';

interface Props {
  item: IJobOrderStatus;
}

const { width } = Dimensions.get('screen');

const CardJobOrderStatusItem: FC<Props> = ({ item }: Props) => {
  const theme = useTheme();
  const onPressItem = () => {
    console.log('item', item);
  };

  return (
    <Pressable
      onPress={onPressItem}
      style={StyleSheet.flatten([styles.root, { backgroundColor: theme.palette.background.paper /*  item.color */ }])}>
      <RNView style={styles.container}>
        <RNView>
          <Typography
            variant="h1"
            style={StyleSheet.flatten([styles.textStyle, styles.textCount, { color: item.color }])}>
            {item.jo_count || 0}
          </Typography>
          <Typography variant="subtitle" style={StyleSheet.flatten([styles.textStyle, { color: item.color }])}>
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
    minWidth: width / 2 - createSpacing(8),
    marginRight: createSpacing(3),
    paddingHorizontal: createSpacing(3),
    paddingTop: createSpacing(3),
    borderRadius: shape.borderRadius,
  },
  container: {
    minHeight: 90,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textStyle: {
    // color: palette.primary.contrastText,
  },
  textCount: {
    fontSize: 30,
  },
  icon: {
    // color: palette.primary.contrastText,
  },
});

export default CardJobOrderStatusItem;
