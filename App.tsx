/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import CharactersNavigation from './navigations/CharactersNavigation';
import { store } from './store';

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
    <Provider store={store}>
      <NavigationContainer>
        <CharactersNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
