import axios from 'axios';

export interface IQueryParams {
  limit?: number;
  offset?: number;
  formatType?: string;
  orderBy?: string;
  displayBy?: string;
  nameStartsWith?: string
}

const defaultParams = {
  apikey: '9b5e63f935b69c8f68b5cedf54c97a81',
  hash: '2e8ed0d1737174b673ae2b52c756e801',
  ts: 1,
};

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public';

const marvelAPI = {
  get: async (path: string, queryParams: IQueryParams = {}) => {
    const params = {
      ...defaultParams,
      ...queryParams,
    };
    return axios(path, { params });
  },
};

export default marvelAPI;
