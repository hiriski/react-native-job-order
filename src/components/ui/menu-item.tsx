import useTheme from '@app/hooks/use-theme';
import { grey } from '@app/lib/theme/colors';
import React, { FC, ReactElement, ReactNode, useMemo } from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Text, Switch } from 'react-native';
import { createSpacing } from '@utils/theme';

// import { PaletteMode } from '@app/interfaces/theme';

interface Props {
  title?: string;
  enableBackButton?: boolean;
  enableSwitch?: boolean;
  switchValue?: boolean;
  onPress?: () => void;
  renderStartIcon?: ReactElement | ReactNode;
}

// @ts-ignore
// const backgroundColor = (color?: ButtonColor, pressed: boolean): string => {
//   return getBackgroundColorMenuItem(color as ButtonColor, pressed);
// };

// const getPressedBackgroundColor = (mode: PaletteMode) => (mode === 'dark' ? grey[200] : grey[500]);

const MenuItem: FC<Props> = ({ title, enableSwitch, switchValue, onPress, renderStartIcon }: Props) => {
  const { palette } = useTheme();
  const { mode } = palette;

  const [rippleColor] = useMemo(() => (palette.mode === 'dark' ? grey[500] : grey[200]), [palette]);

  // /**
  //  * Back button
  //  * @returns JSX.Element
  //  */
  // const renderStartIcon = (): JSX.Element => (

  // );

  return (
    <View style={styles.root}>
      <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(rippleColor, false)}>
        <View style={styles.touchableInnner}>
          <View style={styles.content}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {renderStartIcon}
              <Text
                style={[
                  styles.textStyle,
                  { marginLeft: renderStartIcon ? createSpacing(6) : 0, color: palette.text.primary },
                ]}>
                {title}
              </Text>
            </View>
            {enableSwitch && (
              <Switch
                trackColor={{ false: grey[400], true: palette.primary.light }}
                thumbColor={switchValue ? palette.primary.main : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onPress}
                value={switchValue}
              />
            )}
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // borderBottomColor: grey[100],
    // borderBottomWidth: 1,
  },
  touchableInnner: {
    flex: 1,
    flexGrow: 1,
    height: 54,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: createSpacing(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    marginTop: -4,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontWeight: '600',
  },
});

MenuItem.defaultProps = {
  title: undefined,
  enableSwitch: false,
  switchValue: false,
};

export default MenuItem;
