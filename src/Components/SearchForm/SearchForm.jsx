import { useState } from 'react';
import styles from './SearchForm.module.css';

export const SearchForm = ({ initialSearchQuery, onSearch }) => {
  const [searchValue, setSearchValue] = useState(initialSearchQuery);

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchValue);
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
