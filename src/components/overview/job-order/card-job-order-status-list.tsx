import React from 'react';
import { View as RNView, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import CardJobOrderStatusItem from './card-job-order-status-item';
import { Typography } from '@components/ui';
import SectionTitle from '@components/secton-title/section-title';
import { createSpacing } from '@utils/theme';

export interface JoStatus {
  id: number;
  label: string;
  jo_count: number;
  color: string;
}

const cardList: JoStatus[] = [
  {
    id: 1,
    label: 'Waiting List',
    jo_count: 5,
    color: '#ff8e00',
  },
  {
    id: 2,
    label: 'In Progress',
    jo_count: 32,
    color: '#009e2c',
  },
  {
    id: 3,
    label: 'Selesai',
    jo_count: 542,
    color: '#0079ff',
  },
  {
    id: 4,
    label: 'Ditahan',
    jo_count: 0,
    color: '#9711ff',
  },
  {
    id: 5,
    label: 'Dibatalkan',
    jo_count: 2,
    color: '#ff3737',
  },
];

const CardJobOrderStatusList = () => {
  const renderItem: ListRenderItem<JoStatus> = ({ item }) => <CardJobOrderStatusItem item={item} />;
  return (
    <>
      {/* <RNView style={styles.titleContainer}>
        <SectionTitle spacingHorizontal={4} title="Job Order Status" />
      </RNView> */}
      <FlatList
        contentContainerStyle={styles.flatList}
        style={{ marginBottom: createSpacing(4) }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        bounces={false} // ios only
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: createSpacing(2),
  },
  flatList: {
    paddingLeft: createSpacing(4),
  },
});

export default CardJobOrderStatusList;
