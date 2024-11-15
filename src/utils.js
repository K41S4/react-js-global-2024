import { genreParamName, queryParamName, sortParamName } from './constants';

export const getSearchParamsString = (searchParams) => {
  return `${queryParamName}=${searchParams[queryParamName] ?? ''}&${sortParamName}=${
    searchParams[sortParamName] ?? ''
  }&${genreParamName}=${searchParams[genreParamName] ?? ''}`;
};
