import { IQueryParams } from '../../helpers/interfaces';

interface IComic {
  name: string;
}

export interface IComicState {
  comics: IComic[];
  comic: IComic;
}
