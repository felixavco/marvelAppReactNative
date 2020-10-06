import { ICharactersState } from "./interfaces";

export enum Types {
  SET_CHARACTERS = "SET_CHARACTERS",
  SET_CHARACTER = "SET_CHARACTER",
  SET_FAVORITES = "SET_FAVORITES",
  SET_LOADING = "SET_LOADING",
  SET_COMICS = "SET_COMICS",
  SET_COMIC = "SET_COMIC",
}

export const reducer = (
  state: ICharactersState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case Types.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    case Types.SET_CHARACTER:
      const { character } = payload;
      return {
        ...state,
        character,
      };

    default:
      return state;
  }
};