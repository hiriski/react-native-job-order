import React, { FC } from 'react';
import { View as RNView, StyleSheet, FlatList, ListRenderItem, Pressable } from 'react-native';
import { Typography } from '@/components/ui';
import SectionTitle from '@/components/secton-title/section-title';
import { createSpacing } from '@/utils/theme';
import Ionicons from '@/components/ui/icon-ionicons';
import { grey } from '@/lib/theme/colors';

interface Props {
  item: any;
  index: number;
}

const COUNT = 300;

const TestComponentItem: FC<Props> = ({ item, index }: Props) => {
  return (
    <RNView style={StyleSheet.flatten([styles.item])}>
      <RNView>
        <Typography variant="h1" style={StyleSheet.flatten([styles.textStyle, { fontSize: 20 }])}>
          {'Render Item ' + (index + 1)}
        </Typography>
      </RNView>
      <RNView>
        <Ionicons name="md-cafe-outline" size={40} style={styles.icon} />
      </RNView>
    </RNView>
  );
};

const TestComponent = () => {
  const renderItem: ListRenderItem<any> = ({ item, index }) => <TestComponentItem item={item} index={index} />;
  return (
    <>
      <RNView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: createSpacing(2),
          marginBottom: createSpacing(2),
        }}>
        <Typography variant="h4">Test FlatList Render {COUNT} Item</Typography>
      </RNView>
      <FlatList
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={new Array(COUNT).fill('item')}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: createSpacing(2),
  },
  flatList: {
    paddingHorizontal: createSpacing(4),
    marginTop: createSpacing(4),
  },
  item: {
    borderColor: grey[400],
    borderWidth: 1,
    marginBottom: createSpacing(3),
    borderRadius: 3,
    flexDirection: 'row',
    paddingVertical: createSpacing(2),
    paddingHorizontal: createSpacing(5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    marginTop: -6,
  },
  icon: {},
});

export default TestComponent;
