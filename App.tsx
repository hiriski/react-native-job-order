import React, { FC } from 'react';
import { ReactReduxProvider, NavigationProvider, ThemeProvider } from './src/components/providers';
import { RootStackNavigator } from './src/navigations';

const App: FC = () => (
  <ReactReduxProvider>
    <ThemeProvider>
      <NavigationProvider>
        <RootStackNavigator />
      </NavigationProvider>
    </ThemeProvider>
  </ReactReduxProvider>
);

export default App;
