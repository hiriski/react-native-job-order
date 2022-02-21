import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, StatusBar } from 'react-native';
import { palettes } from '@config/theme';

const TouchableNativeFeedbackComponent = () => {
  const [rippleColor, setRippleColor] = useState(palettes.primary.main);
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        // onPress={() => {
        //   setRippleColor(randomHexColor());
        // }}
        background={TouchableNativeFeedback.Ripple(rippleColor, true)}>
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  touchable: { flex: 0.5, borderColor: 'black', borderWidth: 1 },
  text: { alignSelf: 'center' },
});

export default TouchableNativeFeedbackComponent;
