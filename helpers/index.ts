/* eslint-disable import/prefer-default-export */
type thumbnail = {
  path: string,
  extension: string,
}

const getImage = (img: thumbnail) => {
  return {
    uri: `${img.path}/portrait_uncanny.${img.extension}`,
  };
};

export {
  getImage,
};
