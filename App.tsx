import React, { FC } from 'react';
import { ReactReduxProvider, NavigationProvider, ThemeProvider, SafeAreaProvider } from './src/components/providers';
import { RootStackNavigator } from './src/navigations';

const App: FC = () => (
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

export default App;
