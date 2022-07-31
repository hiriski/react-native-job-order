import React, { FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Jo } from '@/interfaces/jo';
import { JobOrderItem } from '.';
import { createSpacing } from '@/utils/theme';

interface Props {
  items: Jo[];
  isLoading: boolean;
}

const JobOrderList: FC<Props> = ({ items, isLoading }: Props) => {
  const renderItem: ListRenderItem<Jo> = ({ item }) => <JobOrderItem item={item} />;
  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      style={{ flex: 1, flexGrow: 1 }}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(item.id + index)}
      bounces={false}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // paddingBottom: createSpacing(4),
  },
  root: {
    // flex: 1,
    // flexGrow: 1,
  },
});

export default JobOrderList;
