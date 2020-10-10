import { ICharactersState } from './characters.interfaces';
import { IAction } from '../index';

export const Types = {
  SET_CHARACTERS: 'SET_CHARACTERS',
  SET_CHARACTER: 'SET_CHARACTER',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_LOADING: 'SET_LOADING',
  SET_COMICS: 'SET_COMICS',
  SET_COMIC: 'SET_COMIC',
};

const defaultState: ICharactersState = {
  characters: [],
  character: undefined,
  searchTerm: '',
  isLoading: true,
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case Types.SET_CHARACTERS:
      return {
        ...state,
        ...action.payload,
      };

    case Types.SET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    default:
      return state;
  }
};
