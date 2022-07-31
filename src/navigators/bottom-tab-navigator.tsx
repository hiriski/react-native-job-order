import React, { FC, ReactElement, ReactNode, useCallback, useMemo, useRef } from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InventoryScreen, OverviewScreen, SettingsScreen } from '../screens';
import { MAIN_STACK } from '@/config/navigators';
import { CustomerStackNavigator } from '@/navigators/index';
import { Descriptor, RouteProp } from '@react-navigation/native';
import { IonIcons, MaterialIcon, MenuItem } from '@/components/ui';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
import { blue } from '@/lib/theme/colors';

import JobOrderStackNavigator from '@/modules/job-order/job-order-stack-navigator';
import { HomeScreen } from '@/modules/home/screens';
import useTheme from '@/hooks/use-theme';
import { Theme } from '@/interfaces/theme';
import { isIOS } from '@/utils/os';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { createSpacing } from '@/utils/theme';

const TabStack = createBottomTabNavigator();

interface TabBarItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  icon: ReactElement;
  label: ReactNode;
}

const TabBarItem: FC<TabBarItemProps> = ({ isFocused, onPress, onLongPress, icon, label }) => {
  const theme = useTheme();
  console.log('label', label);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: isIOS ? 22 : 10,
      }}>
      {icon}
      <Text style={{ color: isFocused ? theme.palette.primary.main : '#222', fontSize: 11, marginTop: 2 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const BottomTabNavigator: FC = () => {
  const theme = useTheme();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [300], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number): void => {
    // console.log('handleSheetChanges', index);
    null;
  }, []);

  const handleOpenBottomSheet = (): void => {
    bottomSheetRef.current?.expand();
  };

  const renderCustomTab = ({ state, descriptors, navigation }: BottomTabBarProps): ReactNode => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.palette.background.paper,
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          let icon = null;
          const size = 26;
          switch (route.name) {
            case MAIN_STACK.HOME:
              icon = (
                <IonIcons
                  name={isFocused ? 'layers' : 'layers-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );
              break;
            case MAIN_STACK.CUSTOMER:
              icon = (
                <IonIcons
                  name={isFocused ? 'ios-trophy' : 'ios-trophy-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );
              break;
            case MAIN_STACK.INVENTORY:
              icon = (
                <IonIcons
                  name={isFocused ? 'md-file-tray' : 'md-file-tray-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );
              break;
            case MAIN_STACK.JOB_ORDER:
              icon = (
                <IonIcons
                  name={isFocused ? 'ios-document-text' : 'ios-document-text-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );
              break;
            case MAIN_STACK.SETTINGS:
              icon = (
                <IonIcons
                  name={isFocused ? 'ios-server-sharp' : 'ios-server-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );

              break;
            default:
              icon = (
                <IonIcons
                  name={isFocused ? 'layers' : 'layers-outline'}
                  size={size}
                  color={isFocused ? theme.palette.primary.main : theme.palette.text.disabled}
                />
              );
              break;
          }

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true } as never);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (index === 1) {
            return (
              <>
                <TabBarItem
                  key={route.key}
                  isFocused={isFocused}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  icon={icon}
                  label={label}
                />
                <View
                  key={'custom-tab-item'}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    onPress={handleOpenBottomSheet}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 56,
                      height: 56,
                      width: 56,
                    }}>
                    <IonIcons name="add" size={36} color={theme.palette.primary.contrastText} />
                  </TouchableOpacity>
                </View>
              </>
            );
          } else {
            return (
              <TabBarItem
                key={route.key}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
                icon={icon}
                label={label}
              />
            );
          }
        })}
      </View>
    );
  };

  const renderBackdropBottomSheet = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.45} pressBehavior="close" />
    ),
    [],
  );

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

      <TabStack.Navigator
        initialRouteName={MAIN_STACK.HOME}
        screenOptions={{ headerShown: false }}
        tabBar={renderCustomTab}>
        <TabStack.Screen options={{ tabBarLabel: 'Home' }} name={MAIN_STACK.HOME} component={HomeScreen} />
        <TabStack.Screen
          options={{ tabBarLabel: 'Job Order' }}
          name={MAIN_STACK.JOB_ORDER}
          component={JobOrderStackNavigator}
        />
        <TabStack.Screen
          options={{ tabBarLabel: 'Bahan Baku' }}
          name={MAIN_STACK.INVENTORY}
          component={InventoryScreen}
        />
        <TabStack.Screen
          options={{ tabBarLabel: 'Pengaturan' }}
          name={MAIN_STACK.SETTINGS}
          component={SettingsScreen}
        />
      </TabStack.Navigator>

      <BottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdropBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        bottomInset={90}
        // set `detached` to true
        detached={true}
        style={styles.bottomSheetRoot}
        onChange={handleSheetChanges}>
        {/* <BottomSheetView style={styles.sheetView}> */}
        <View style={styles.contentContainer}>
          <MenuItem
            title="Buat Job Order"
            onPress={() => null}
            renderStartIcon={<MaterialIcon name="bedtime" size={22} />}
          />
        </View>
        {/* </BottomSheetView> */}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetRoot: {
    // add horizontal space
    marginHorizontal: createSpacing(4),
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sheetView: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default BottomTabNavigator;
