import React, { FC } from 'react';
import { NavigationProvider, ThemeProvider } from './src/components/providers';
import { RootStackNavigation } from './src/navigations';

const App: FC = () => (
  <ThemeProvider>
    <NavigationProvider>
      <RootStackNavigation />
    </NavigationProvider>
  </ThemeProvider>
)

export default App;
