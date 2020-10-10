import { ICharactersState } from './characters.interfaces';
import { IAction } from '../index';

export const Types = {
  SET_PAGE_LOADING: 'SET_PAGE_LOADING',
  SET_CHARACTERS: 'SET_CHARACTERS',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CHARACTER: 'SET_CHARACTER',
  SET_LOADING: 'SET_LOADING',
  SET_COMICS: 'SET_COMICS',
  SET_SEARCH: 'SET_SEARCH',
  SET_COMIC: 'SET_COMIC',
};

const defaultState: ICharactersState = {
  searchTerm: '',
  characters: [],
  isLoading: false,
  isPageLoading: true,
  character: undefined,
  showSearchModal: false,
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case Types.SET_CHARACTERS:
      return {
        ...state,
        isPageLoading: action.payload.isLoading,
        characters: [...state.characters, ...action.payload.characters],
      };

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

    default:
      return state;
  }
};
