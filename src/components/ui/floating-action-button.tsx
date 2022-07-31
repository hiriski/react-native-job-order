import React, { useState } from 'react';
import { Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createTheme } from '@/config/theme';
import useTheme from '@/hooks/use-theme';

const FloatingActionButton = () => {
  const { palette } = useTheme();
  const clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };

  return (
    <Pressable onPress={clickHandler} style={styles.pressable}>
      <Icon name="arrow-forward" size={30} color={palette.primary.contrastText} />
    </Pressable>
  );
};

const theme = createTheme();

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 40,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});

export default FloatingActionButton;
