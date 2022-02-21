import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { palettes } from '@config/theme';

const IconButton = () => {
  const [rippleColor] = useState(palettes.primary.main);
  return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, true)}>
      <View style={styles.touchable}>
        <Text style={styles.text}>O</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  touchable: { flex: 0.5, borderColor: 'black', borderWidth: 1 },
  text: { alignSelf: 'center' },
});

export default IconButton;
