import React, { FC } from 'react';
import { ReactReduxProvider, NavigationProvider, ThemeProvider } from './src/components/providers';
import { RootStackNavigation } from './src/navigations';

const App: FC = () => (
  <ReactReduxProvider>
    <ThemeProvider>
      <NavigationProvider>
        <RootStackNavigation />
      </NavigationProvider>
    </ThemeProvider>
  </ReactReduxProvider>
);

export default App;
