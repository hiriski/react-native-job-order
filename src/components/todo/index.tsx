import React, { FC, memo } from 'react';
import { View, FlatList, StyleSheet, Text, ListRenderItem } from 'react-native';
import { Todo } from '../../interfaces/todo';

const Item: FC<{ item: Todo }> = ({ item }: { item: Todo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.status}>{item.completed ? 'Complete' : 'Incomplete'}</Text>
  </View>
);

interface Props {
  todos: Todo[];
}
const TodoComponent: FC<Props> = ({ todos }: Props) => {
  const renderItem: ListRenderItem<Todo> = ({ item }) => <Item item={item} />;

  console.log('todos', todos);

  return <FlatList data={todos} renderItem={renderItem} keyExtractor={(item, index) => String(item.id + index)} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#c3cced',
    padding: 20,
    marginVertical: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
  },
});

const MemoizedTodo = memo(TodoComponent);
export default MemoizedTodo;
