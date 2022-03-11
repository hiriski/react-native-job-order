import React, { FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Jo } from '@app/interfaces/jo';
import { JobOrderItem } from '.';
import { createSpacing } from '@utils/theme';

interface Props {
  items: Jo[];
  isLoading: boolean;
}

const JobOrderList: FC<Props> = ({ items, isLoading }: Props) => {
  const renderItem: ListRenderItem<Jo> = ({ item }) => <JobOrderItem item={item} />;
  return (
    <FlatList
      contentContainerStyle={styles.root}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(item.id + index)}
      bounces={false}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    paddingBottom: createSpacing(4),
    // flex: 1,
    // flexGrow: 1,
  },
});

export default JobOrderList;
