import React, { FC } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Typography } from '@/components/ui';
import useTheme from '@/hooks/use-theme';
import { createSpacing } from '@/utils/theme';
import { useNavigation } from '@react-navigation/core';
import { grey } from '@/lib/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Customer } from '@/interfaces/customer';

interface Props {
  customer: Customer;
}

const CustomerDetailHeader: FC<Props> = ({ customer }: Props) => {
  const navigation = useNavigation();
  const { palette } = useTheme();
  const sampleAvatar = require('../../assets/icons/man.png');

  const onPressBack = () => {
    navigation.goBack();
  };

  const renderBackButton = (): JSX.Element => (
    <TouchableNativeFeedback
      onPress={onPressBack}
      style={styles.touchableRoot}
      background={TouchableNativeFeedback.Ripple(grey[100], true, 40)}>
      <View style={styles.touchableInnner}>
        <Icon name="arrow-back" size={30} />
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={StyleSheet.flatten([styles.header, { backgroundColor: palette.primary.main }])}>
      {renderBackButton()}
      <View style={styles.headerInner}>
        <Image style={styles.avatar} source={sampleAvatar} />
        <View style={styles.userInfo}>
          <Typography
            variant="h3"
            style={StyleSheet.flatten([styles.userName, { color: palette.primary.contrastText }])}>
            {customer.name}
          </Typography>
          <Typography style={{ color: palette.primary.contrastText }}>{customer.phone_number}</Typography>
        </View>
      </View>
    </View>
  );
};

const CustomerDetail: FC<Props> = ({ customer }: Props) => {
  return (
    <View style={styles.root}>
      <CustomerDetailHeader customer={customer} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingTop: createSpacing(6),
    paddingBottom: createSpacing(8),
  },
  headerInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableRoot: {
    width: 100,
    height: 100,
  },
  touchableInnner: {
    // marginHorizontal: createSpacing(4),
  },
  avatar: {
    height: 100,
    width: 100,
  },
  userInfo: {
    marginTop: createSpacing(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {},
});

export default CustomerDetail;
