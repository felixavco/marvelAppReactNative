import { ICharactersState } from './characters.interfaces';
import { IAction } from '../index';

export const Types = {
  SET_COMIC: 'SET_COMIC',
  SET_ERROR: 'SET_ERROR',
  SET_COMICS: 'SET_COMICS',
  SET_SEARCH: 'SET_SEARCH',
  SET_LOADING: 'SET_LOADING',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CHARACTER: 'SET_CHARACTER',
  SET_CHARACTERS: 'SET_CHARACTERS',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_PAGE_LOADING: 'SET_PAGE_LOADING',
  CLEAR_SEARCH_TERM: 'CLEAR_SEARCH_TERM',
};

const defaultState: ICharactersState = {
  searchTerm: '',
  characters: [],
  favorites: [],
  isLoading: false,
  isPageLoading: true,
  character: undefined,
  showSearchModal: false,
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case Types.SET_CHARACTERS: {
      const { reset, isPageLoading, characters } = action.payload;
      let updatedCharacters = characters;
      if (!reset) {
        updatedCharacters = [...state.characters, ...characters];
      }
      return {
        ...state,
        isPageLoading,
        characters: updatedCharacters,
      };
    }
    case Types.SET_FAVORITES: {
      console.log('FAVORITE', action.payload);
      return {
        ...state,
        favorites: [],
      };
    }
    case Types.SET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    case Types.SET_PAGE_LOADING:
      return {
        ...state,
        isPageLoading: action.payload,
      };

    case Types.SET_SHOW_MODAL:
      return {
        ...state,
        showSearchModal: action.payload,
      };

    case Types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case Types.SET_SEARCH:
      return {
        ...state,
        ...action.payload,
      };

    case Types.CLEAR_SEARCH_TERM:
      return {
        ...state,
        searchTerm: '',
        isPageLoading: true,
      };

    default:
      return state;
  }
};
