import { paths } from '../../config';
import marvelAPI, { IQueryParams } from '../../helpers/http';
import { store } from '../index';
import { Types } from './characters.reducer';

const { dispatch } = store;

const setError = (err: Error) => {
  dispatch({
    type: Types.SET_ERROR,
    payload: err,
  });
};

interface IGetList {
  reset?: boolean,
  params?: IQueryParams,
}

const getList = async ({ reset = false, params }: IGetList) => {
  try {
    const { data } = await marvelAPI.get(paths.characters(), params);
    dispatch({
      type: Types.SET_CHARACTERS,
      payload: {
        reset,
        characters: data.data.results,
        isPageLoading: false,
      },
    });
  } catch (error) {
    setError(error);
  }
};

const getOne = async (id: string) => {
  try {
    const { data } = await marvelAPI.get(paths.characters(id));
    dispatch({
      type: Types.SET_CHARACTER,
      payload: data.data.results,
    });
  } catch (error) {
    setError(error);
  }
};

const clear = (clearOne = false) => {
  dispatch({
    type: clearOne ? Types.SET_CHARACTER : Types.SET_CHARACTERS,
    payload: clearOne ? undefined : [],
  });
};

const search = async (searchTerm: string) => {
  try {
    const params = {
      limit: 100,
      offset: 0,
      orderBy: 'name',
      nameStartsWith: searchTerm,
    };
    const { data } = await marvelAPI.get(paths.characters(), params);
    dispatch({
      type: Types.SET_SEARCH,
      payload: {
        searchTerm,
        characters: data.data.results,
        showSearchModal: false,
        isPageLoading: false,
      },
    });
  } catch (error) {
    setError(error);
  }
};

const charactersActions = {
  getList,
  search,
  getOne,
  clear,
};

export default charactersActions;
