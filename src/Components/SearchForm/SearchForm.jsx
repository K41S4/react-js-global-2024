import { useState } from 'react';
import styles from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';
import { queryParamName } from '../../constants';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams({ [queryParamName]: '' });
  const [searchValue, setSearchValue] = useState(searchParams.get(queryParamName));

  const handleSearch = (value) =>
    setSearchParams((params) => {
      params.set(queryParamName, value);
      return params;
    });

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(searchValue);
      }}
    >
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={styles.input}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};
