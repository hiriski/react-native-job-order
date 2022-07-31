import React, { FC, useEffect } from 'react';
import { ReactReduxProvider, NavigationProvider, ThemeProvider, SafeAreaProvider } from './src/components/providers';

import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

import { NetworkProvider } from 'react-native-offline';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Root Stack
import { RootStackNavigator } from './src/root-stack-navigator';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReactReduxProvider>
      <ThemeProvider>
        <NetworkProvider pingInBackground={true} pingInterval={5000} shouldPing={false} pingOnlyIfOffline={true}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationProvider>
              <SafeAreaProvider>
                <RootStackNavigator />
              </SafeAreaProvider>
            </NavigationProvider>
          </GestureHandlerRootView>
        </NetworkProvider>
      </ThemeProvider>
    </ReactReduxProvider>
  );
};
export default App;
