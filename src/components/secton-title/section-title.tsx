import useTheme from '@app/hooks/use-theme';
import { grey } from '@app/lib/theme/colors';
import { Typography } from 'components/ui';
import React, { FC, ReactNode, useMemo } from 'react';
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
import { createSpacing } from '@utils/theme';
import { createTheme } from '@config/theme';

interface Props {
  title?: string;
  enableRightButton?: boolean;
  onPressRightButton?: () => void;
  textStyle?: TextStyle;
  spacingHorizontal?: number;
}

const SectionTitle: FC<Props> = ({
  title,
  enableRightButton,
  onPressRightButton,
  textStyle,
  spacingHorizontal,
}: Props) => {
  const { palette } = useTheme();

  const [rippleColor] = useMemo(() => (palette.mode === 'dark' ? grey[500] : grey[200]), [palette]);

  /**
   * Right button
   * @returns JSX.Element
   */
  const renderRightButton = (): JSX.Element => (
    <TouchableNativeFeedback
      onPress={onPressRightButton}
      style={styles.touchableRoot}
      background={TouchableNativeFeedback.Ripple(rippleColor, true, 40)}>
      <View style={styles.touchableInnner}>
        <Icon name="arrow-back" size={30} />
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={StyleSheet.flatten([styles.root, { marginHorizontal: createSpacing(spacingHorizontal || 0) }])}>
      {enableRightButton ? renderRightButton() : null}
      <Typography style={StyleSheet.flatten([styles.textStyle, textStyle])} variant="h6">
        {title}
      </Typography>
    </View>
  );
};

const { palette } = createTheme();
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: createSpacing(1),
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
    marginTop: -2,
    color: palette.text.secondary,
  },
});

SectionTitle.defaultProps = {
  title: undefined,
  enableRightButton: false,
  spacingHorizontal: createSpacing(0),
};

export default SectionTitle;
