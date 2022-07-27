import React, { FC, useEffect } from 'react';
import { ReactReduxProvider, NavigationProvider, ThemeProvider, SafeAreaProvider } from './src/components/providers';
import { RootStackNavigator } from './src/navigations';

import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReactReduxProvider>
      <ThemeProvider>
        <NavigationProvider>
          <SafeAreaProvider>
            <RootStackNavigator />
          </SafeAreaProvider>
        </NavigationProvider>
      </ThemeProvider>
    </ReactReduxProvider>
  );
};
export default App;
