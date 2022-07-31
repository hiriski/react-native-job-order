import React, { FC, memo } from 'react';
import { View } from '@/components/ui';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { User } from '@/interfaces/user';
import { UserItem } from '@/components/user/index';

interface Props {
  users: User[];
}

const UserList: FC<Props> = ({ users }: Props) => {
  const renderItem: ListRenderItem<User> = ({ item, index }) => (
    <UserItem user={item} lastItem={index === users.length - 1} />
  );
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(user, index) => String(user.id + index)}
    />
  );
};

const styles = StyleSheet.create({
  root: {},
});

const MemoizedUserList = memo(UserList);
export default MemoizedUserList;
