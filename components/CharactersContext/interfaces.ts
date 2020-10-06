import { IQueryParams } from '../../helpers/interfaces';

interface ICharacter {
  name: string;
  url: string;
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
