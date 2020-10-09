import React, { FunctionComponent } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { colors, screens } from '../config';

// Screens
import Home from '../screens/Home';
import Character from '../screens/Character';

const headerOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
    elevation: 4,
    shadowOpacity: 4,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.textWhite,
};

const Stack = createStackNavigator();

const CharactersNavigation: FunctionComponent = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen
      name={screens.home}
      component={Home}
      options={{ title: 'Characters' }}
    />
    <Stack.Screen
      name={screens.character}
      component={Character}
      options={{ title: 'CHARACTER' }}
    />
  </Stack.Navigator>
);

export default CharactersNavigation;
