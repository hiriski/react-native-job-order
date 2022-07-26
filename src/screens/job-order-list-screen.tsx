import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View as RNView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from 'components/focus-aware-status-bar';
// import Text from 'components/ui/text';

import { useAppSelector } from 'store/hook';
import ScreenHeader from 'components/screen-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@app/hooks/use-theme';
import { useDispatch } from 'react-redux';
import { fetchListJoRequest, setBottomSheetOptionsJo } from '@store/job-order/actions';
import { JobOrderList, JobOrderOptions } from '@components/job-order';
import { Jo } from '@app/interfaces/jo';
import { joList } from '@app/fake-db/jo-list';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';

const JobOrderListScreen: FC = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { listJo, bottomSheetOptionJo } = useAppSelector((state) => state.jo);
  const { data, isLoading, isError } = listJo;

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
  const snapPoints = useMemo(() => ['20%', '40%', '90%'], []);

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

  return (
    <SafeAreaView style={[styles.root, { ...backgroundStyle }]}>
      {/*<FocusAwareStatusBar barStyle="light-content" backgroundColor={palette.primary.main} />*/}
      <FocusAwareStatusBar
        barStyle={palette.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        // backgroundColor={palette.background.default}
      />
      <ScreenHeader
        title="Job Order"
        containerStyle={Platform.OS !== 'ios' ? { backgroundColor: palette.primary.main } : {}}
        textStyle={Platform.OS !== 'ios' ? { color: palette.primary.contrastText } : {}}
      />
      <JobOrderList items={joList as Jo[]} isLoading={isLoading} />
      <BottomSheet
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <JobOrderOptions />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
  },
});

export default JobOrderListScreen;
