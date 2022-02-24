import useTheme from '@app/hooks/use-theme';
import { grey } from '@app/lib/theme/colors';
import Text from 'components/ui/text';
import React, { FC, ReactNode, useMemo, useState } from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Text as RNText } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createSpacing } from '@utils/theme';

interface Props {
  children?: ReactNode;
  title?: string;
  enableBackButton?: boolean;
  onBack?: () => void;
}

const ScreenHeader: FC<Props> = ({ children, title, enableBackButton, onBack }: Props) => {
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
    <View style={styles.root}>
      {!children ? (
        <View style={[styles.container, { paddingHorizontal: !enableBackButton ? createSpacing(4) : 0 }]}>
          {enableBackButton ? renderBackButton() : null}
          <Text style={styles.textStyle} variant="h1">
            {title}
          </Text>
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
    paddingBottom: 20,
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
