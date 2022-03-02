import React, { FC, memo } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Customer } from '@app/interfaces/customer';
import { CustomerItem } from '@components/customer/index';

interface Props {
  customers: Customer[];
}

const CustomerList: FC<Props> = ({ customers }: Props) => {
  const renderItem: ListRenderItem<Customer> = ({ item, index }) => (
    <CustomerItem customer={item} lastItem={index === customers.length - 1} />
  );
  return (
    <FlatList
      data={customers}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(user, index) => String(user.id + index)}
    />
  );
};

const styles = StyleSheet.create({
  root: {},
});

const MemoizedCustomerList = memo(CustomerList);
export default MemoizedCustomerList;
