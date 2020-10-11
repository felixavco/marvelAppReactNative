export default {
  characters: (id?: string) => `/characters${id ? `/${id}` : ''}`,
  comics: (id?: string) => `/comics${id ? `/${id}` : ''}`,
  stories: (id?: string) => `/stories${id ? `/${id}` : ''}`,
};
