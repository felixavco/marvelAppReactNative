import { paths } from '../../config';
import marvelAPI, { IQueryParams } from '../../helpers/http';
import { store } from '../index';
import { Types } from './characters.reducer';

const { dispatch } = store;

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

const charactersActions = {
  setFavorite,
  getList,
  getOne,
  clear,
};

export default charactersActions;
