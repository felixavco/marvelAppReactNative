import React, { FunctionComponent, createContext, useReducer } from 'react';
import { ICharactersState } from './interfaces';
import { IQueryParams } from '../../helpers/interfaces';
import { reducer, Types } from './reducer';
import marvelAPI from '../../helpers/http';
import { paths } from '../../config';

const defaultState: ICharactersState = {
  characters: [],
  character: undefined,
  searchTerm: '',
  isLoading: true,
  characterActions: {
    getList: () => {},
    getOne: () => {},
    clear: () => {},
    setFavorite: () => {},
  },
};

const CharactersContext = createContext<ICharactersState>(defaultState);

// eslint-disable-next-line react/prop-types
const CharactersProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getList = async (params?: IQueryParams) => {
    const { data } = await marvelAPI.get(paths.characters, params);
    dispatch({
      type: Types.SET_CHARACTERS,
      payload: {
        characters: data.data.results,
        isLoading: false,
      },
    });
  };

  const getOne = async (id: string) => {
    const { data } = await marvelAPI.get(paths.characters);
    dispatch({
      type: Types.SET_CHARACTER,
      payload: data.data.results,
    });
  };

  const clear = (clearOne = false) => {
    dispatch({
      type: clearOne ? Types.SET_CHARACTER : Types.SET_CHARACTERS,
      payload: clearOne ? undefined : [],
    });
  };

  const setFavorite = () => {
    console.log('SET_FAV');
  };

  const characterActions = {
    setFavorite,
    getList,
    getOne,
    clear,
  };

  const CharactersState: ICharactersState = {
    ...state,
    characterActions,
  };

  return (
    <CharactersContext.Provider value={CharactersState}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider, CharactersContext };
