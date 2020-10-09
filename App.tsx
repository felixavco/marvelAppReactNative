/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import CharactersNavigation from './navigations/CharactersNavigation';
import { CharactersProvider } from './components/CharactersContext';

import { fonts } from './config';
import Loader from './components/Loader';

const fontsConfig = {
  [fonts.primary]: require('./assets/fonts/OpenSans-Regular.ttf'),
  [fonts.primaryBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
};

const App = () => {
  const [loaded] = useFonts(fontsConfig);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <CharactersProvider>
      <NavigationContainer>
        <CharactersNavigation />
      </NavigationContainer>
    </CharactersProvider>

  );
};

export default App;
