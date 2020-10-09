/* eslint-disable no-unused-vars */
import { IQueryParams } from '../../helpers/interfaces';

export interface ICharacter {
  id: number;
  name: string;
  description?: string;
  modified?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface IActions {
  getList: (params?: IQueryParams) => void;
  getOne: (id: string) => void;
  clear: (clearOne?: boolean) => void;
  setFavorite?: (id: string) => void;
}

export interface ICharactersState {
  characters: ICharacter[];
  character?: ICharacter;
  searchTerm: string;
  isLoading: boolean;
  characterActions: IActions;
}
