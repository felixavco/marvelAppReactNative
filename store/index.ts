import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ICharactersState } from './characters/characters.interfaces';

import CharactersReducer from './characters/characters.reducer';

export interface IAction {
  type: string;
  payload: any
}

export interface IStore {
  characters: ICharactersState,
  stories: any,
}

const rootReducer = combineReducers({
  characters: CharactersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export function dispatcher(action: IAction) {
  store.dispatch(action);
}
