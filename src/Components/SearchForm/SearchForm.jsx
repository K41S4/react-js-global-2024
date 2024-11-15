'use client';

import styles from './SearchForm.module.css';
import { genreParamName, queryParamName, sortParamName } from '../../constants';
import { useSearchParams } from 'next/navigation';

export const SearchForm = () => {
  const searchParams = useSearchParams();

  return (
    <form action={''} method="GET" className={styles.container}>
      <input
        type="text"
        name={queryParamName}
        defaultValue={searchParams.get(queryParamName)}
        className={styles.input}
      />
      <input type="hidden" name={genreParamName} value={searchParams.get(genreParamName)} />
      <input type="hidden" name={sortParamName} value={searchParams.get(sortParamName)} />
      <button className={styles.button}>Search</button>
    </form>
  );
};
