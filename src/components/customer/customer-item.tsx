import React, { FC } from 'react';
import { Avatar, MaterialIcon, Text, View } from '@/components/ui';
import { StyleSheet, TouchableNativeFeedback, View as RNView, Pressable } from 'react-native';
import { grey } from '@/lib/theme/colors';
import { colors500, createSpacing } from '@/utils/theme';
import { useNavigation } from '@react-navigation/core';
import { CUSTOMER_STACK } from '@/config/navigators';
import useTheme from '@/hooks/use-theme';
import { Customer } from '@/interfaces/customer';

interface Props {
  customer: Customer;
  lastItem: boolean;
}

const CustomerItem: FC<Props> = ({ customer, lastItem }: Props) => {
  const navigation = useNavigation();
  const { palette } = useTheme();

  const onPressMore = () => {
    console.log('customer', customer);
  };

  const onPress = () => {
    navigation.navigate(CUSTOMER_STACK.CUSTOMER_DETAIL as never, { customer } as never);
  };

  return (
    <View style={styles.root}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { backgroundColor: pressed ? grey[200] : palette.background.paper },
          { ...styles.container },
        ]}>
        <Avatar size={40} color={colors500[Math.floor(Math.random() * colors500.length)]} />
        <RNView style={{ marginLeft: createSpacing(4) }}>
          <Text variant="h4" style={{ marginTop: -5 }}>
            {customer.name}
          </Text>
          <Text>{customer.phone_number}</Text>
        </RNView>
        <TouchableNativeFeedback onPress={onPressMore} background={TouchableNativeFeedback.Ripple(grey[400], true)}>
          <RNView style={styles.iconButton}>
            <MaterialIcon name="more-vert" size={24} style={{ color: grey[500] }} />
          </RNView>
        </TouchableNativeFeedback>
      </Pressable>
      {!lastItem && <RNView style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // paddingHorizontal: createSpacing(5),
  },
  container: {
    flexDirection: 'row',
    paddingVertical: createSpacing(3),
    flex: 1,
    alignItems: 'center',
    paddingLeft: createSpacing(4),
  },
  containerPressed: {},
  iconButton: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: createSpacing(2),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: grey[200],
  },
});

export default CustomerItem;
