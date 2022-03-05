import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BottomSheetModal as GorhomBottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import CustomBackdrop from '@components/bottom-sheets/custom-backdrop';

const BottomSheetModal = () => {
  // ref
  const bottomSheetModalRef = useRef<GorhomBottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button onPress={handlePresentModalPress} title="Present Modal" color="black" />
        <GorhomBottomSheetModal
          backdropComponent={CustomBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </GorhomBottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetModal;
