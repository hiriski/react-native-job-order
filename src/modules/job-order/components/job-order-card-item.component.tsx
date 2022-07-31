import React, { FC } from 'react';
import { Avatar, MaterialIcon, Text, Typography } from '@/components/ui';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View as RNView,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { blue, grey } from '@/lib/theme/colors';
import { colors500, createSpacing } from '@/utils/theme';
import { useNavigation } from '@react-navigation/core';
import { JOB_ORDER_STACK } from '@/config/navigators';
import useTheme from '@/hooks/use-theme';
import { createTheme } from '@/config/theme';
import { createColorProductionStatusJo } from '@/utils/jo';
import { convertToRupiah } from '@/utils/currency';
import moment from 'moment';
import { DB_FORMAT_TIMESTAMPS } from '@/constants';
import { useDispatch } from 'react-redux';
import { setBottomSheetOptionsJo } from '@/store/job-order/actions';
import { IJobOrder } from '../job-order.interface';

interface Props {
  item: IJobOrder;
}

export const JobOrderCardItem: FC<Props> = ({ item }: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const productionStatus = createColorProductionStatusJo(item.production_status.name);

  const onPressMore = () => {
    dispatch(setBottomSheetOptionsJo(true, item.id));
    // console.log('item', item);
  };

  const onPress = () => {
    // Alert.alert('Item ID: ' + item.id + 'pressed');
    navigation.navigate(JOB_ORDER_STACK.DETAIL_JOB_ORDER as never, { item } as never);
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <RNView style={StyleSheet.flatten([styles.container, { backgroundColor: palette.background.paper }])}>
        <RNView style={StyleSheet.flatten([styles.flexRow, styles.header])}>
          <Typography variant="h6" style={{ color: blue[600] }}>
            #{item.order_number}
          </Typography>
          <RNView style={{ alignItems: 'flex-end' }}>
            <Typography color="secondary">Deadline</Typography>
            <Typography variant="subtitle2">
              {moment(item.order_date, DB_FORMAT_TIMESTAMPS).format('DD MMM YYYY - HH:mm')}
            </Typography>
          </RNView>
        </RNView>

        <RNView style={StyleSheet.flatten([styles.flexRow, { paddingTop: createSpacing(3) }])}>
          <RNView>
            <Text variant="h4" style={{ marginTop: -5 }}>
              {item.title}
            </Text>
          </RNView>
        </RNView>

        {/* Footer */}
        <RNView style={StyleSheet.flatten([styles.flexRow, styles.footer])}>
          <Text style={{ color: productionStatus.color }}>{item.production_status.name}</Text>
          {/* { item.transaction && } */}
          <Typography variant="h6" style={{ fontSize: 15 }}>
            {convertToRupiah(item.total_order)}
          </Typography>
          <TouchableNativeFeedback
            onPress={onPressMore}
            background={TouchableNativeFeedback.Ripple(grey[400], false, 30)}>
            <RNView style={styles.iconButton}>
              <MaterialIcon name="more-vert" size={24} style={{ color: grey[500] }} />
            </RNView>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={onPressMore}
            background={TouchableNativeFeedback.Ripple(grey[400], true, 40)}>
            <RNView style={styles.iconButton}>
              <MaterialIcon name="more-vert" size={24} style={{ color: grey[500] }} />
            </RNView>
          </TouchableNativeFeedback>
        </RNView>
      </RNView>
    </Pressable>
  );
};

const { shape } = createTheme();
const styles = StyleSheet.create({
  root: {
    marginHorizontal: createSpacing(4),
    marginTop: createSpacing(3),
  },
  container: {
    paddingVertical: createSpacing(2.5),
    paddingHorizontal: createSpacing(4),
    borderRadius: shape.borderRadius,
    shadowColor: grey[500],
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: grey[200],
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: createSpacing(3),
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: createSpacing(2),
    overflow: 'hidden',
  },
  containerPressed: {},
  iconButton: {
    marginLeft: 'auto',
    width: 36,
    height: 36,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: createSpacing(-2),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: grey[200],
  },
});
