import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { colors } from '../config';
import { ICharacter } from '../store/characters/characters.interfaces';
import HeaderButton from '../components/HeaderButton';
// Screens
import Home from '../screens/Home';
import Character from '../screens/Character';
import { Types } from '../store/characters/characters.reducer';

const searchButton = (dispatch: Function) => {
  const action = { type: Types.SET_SHOW_MODAL, payload: true };
  return {
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={HeaderButton}
      >
        <Item
          title='Search'
          iconName='ios-search'
          onPress={() => dispatch(action)}
        />
      </HeaderButtons>
    ),
  };
};

const favoriteButton = {
  headerRight: () => (
    <HeaderButtons
      HeaderButtonComponent={HeaderButton}
    >
      <Item
        title='Favorite'
        iconName='ios-heart'
        onPress={() => console.log('Favorite')}
      />
    </HeaderButtons>
  ),
};

const headerOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
    elevation: 4,
    shadowOpacity: 4,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.textWhite,
};

export type RootStackParamList = {
  HomeScreen: undefined;
  CharacterScreen: { character: ICharacter }
};

export type CharacterRouteProp = RouteProp<RootStackParamList, 'CharacterScreen'>;

const Stack = createStackNavigator<RootStackParamList>();

const CharactersNavigation: FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={{
          title: 'Characters',
          ...searchButton(dispatch),
        }}
      />
      <Stack.Screen
        name='CharacterScreen'
        component={Character}
        options={({ route }) => ({
          title: route.params.character.name,
          ...favoriteButton,
        })}

      />
    </Stack.Navigator>
  );
};

export default CharactersNavigation;
