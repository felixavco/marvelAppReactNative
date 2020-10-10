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

export interface ICharactersState {
  characters: ICharacter[];
  character?: ICharacter;
  searchTerm: string;
  isPageLoading: boolean;
  isLoading: boolean;
  showSearchModal: boolean;
}
