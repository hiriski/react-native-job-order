import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View as RNView, Platform, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';

import { useAppSelector } from 'store/hook';
import useTheme from '@/hooks/use-theme';
import { useDispatch } from 'react-redux';
import { setBottomSheetOptionsJo } from '@/store/job-order/actions';
import { JobOrderList, JobOrderOptions } from '@/components/job-order';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';
import { IJobOrder } from '../job-order.interface';
import { JobOrderCardItem } from '../components';

export const JobOrderBottomSheetMenu: FC = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { listJo, bottomSheetOptionJo } = useAppSelector((state) => state.jo);

  // useEffect(() => {
  //   dispatch(fetchListJoRequest());
  // }, []);

  const backgroundStyle = {
    backgroundColor: palette.background.default,
  };

  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const handleCloseBottomSheet = (): void => {
    dispatch(setBottomSheetOptionsJo(false, undefined));
  };

  // variables
  const snapPoints = useMemo(() => ['10%', '40%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    if (index === 0) {
      handleCloseBottomSheet();
    }
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    handleCloseBottomSheet();
  }, []);

  useEffect(() => {
    if (bottomSheetOptionJo.open) {
      // bottomSheetRef.current.open();
      handleSnapPress(1);
    }
  }, [bottomSheetOptionJo.open]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // console.log('call clean up');

        handleClosePress();
      };
    }, []),
  );

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        enableTouchThrough={true}
        // disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const renderItem: ListRenderItem<IJobOrder> = ({ item }) => <JobOrderCardItem item={item} />;

  return (
    <BottomSheet
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}>
      <JobOrderOptions />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
  },
});
