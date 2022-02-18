import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import CustomBackdrop from "./custom-backdrop";

const BottomSheetBackdropComponent = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} pressBehavior="close" disappearsOnIndex={1} appearsOnIndex={2} />,
    [],
  );

  const handleClosePress = (): void => {
    bottomSheetRef.current.close();
  };

  return (
    <View style={styles.container}>
      <Button title="Close Sheet" onPress={handleClosePress} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        enableOverDrag={true}
        enableHandlePanningGesture={true}
        enableContentPanningGesture={true}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fbfbfb',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetBackdropComponent;
