import useTheme from '@/hooks/use-theme';
import { grey } from '@/lib/theme/colors';
import { Typography } from 'components/ui';
import React, { FC, ReactNode, useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text as RNText,
  ViewStyle,
  ViewProps,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createSpacing } from '@/utils/theme';

interface Props {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  enableBackButton?: boolean;
  onBack?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ScreenHeader: FC<Props> = ({
  children,
  title,
  subtitle,
  enableBackButton,
  onBack,
  containerStyle,
  textStyle,
}: Props) => {
  const { palette } = useTheme();

  const [rippleColor] = useMemo(() => (palette.mode === 'dark' ? grey[500] : grey[200]), [palette]);

  /**
   * Back button
   * @returns JSX.Element
   */
  const renderBackButton = (): JSX.Element => (
    <TouchableNativeFeedback
      onPress={onBack}
      style={styles.touchableRoot}
      background={TouchableNativeFeedback.Ripple(rippleColor, true, 40)}>
      <View style={styles.touchableInnner}>
        <Icon name="arrow-back" size={30} />
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={StyleSheet.flatten([styles.root, containerStyle])}>
      {!children ? (
        <View style={[styles.container, { paddingHorizontal: !enableBackButton ? createSpacing(4) : 0 }]}>
          {enableBackButton ? renderBackButton() : null}
          <View>
            {title && (
              <Typography style={StyleSheet.flatten([styles.textStyle, textStyle])} variant="h1">
                {title}
              </Typography>
            )}
            {subtitle && <Typography>{subtitle}</Typography>}
          </View>
        </View>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: createSpacing(2),
    paddingBottom: createSpacing(3),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableRoot: {
    alignItems: 'center',
  },
  touchableInnner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: createSpacing(4),
  },
  textStyle: {
    marginTop: -6,
  },
});

ScreenHeader.defaultProps = {
  children: null,
  title: undefined,
  enableBackButton: false,
};

export default ScreenHeader;
