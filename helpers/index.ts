/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import AsyncStorage from '@react-native-community/async-storage';
import { ICharacter } from '../store/characters/characters.interfaces';

type thumbnail = {
  path: string,
  extension: string,
}

const getImage = ({ path, extension }: thumbnail, format?: string) => {
  return {
    uri: `${path}/${format || 'portrait_uncanny'}.${extension}`,
  };
};

const saveFavorites = async (favorite: Partial<ICharacter>[]) => {
  try {
    const jsonValue = JSON.stringify(favorite);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (error) {
    console.error(error);
  }
};

const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('@favorites');
    if (favorites) {
      return JSON.parse(favorites);
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export {
  getImage,
  getFavorites,
  saveFavorites,
};
