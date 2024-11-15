import styles from './SearchForm.module.css';
import { genreParamName, queryParamName, sortParamName } from '../../constants';

export const SearchForm = async ({ searchParams }) => {
  return (
    <form action={''} method="GET" className={styles.container}>
      <input type="text" name={queryParamName} defaultValue={searchParams[queryParamName]} className={styles.input} />
      <input type="hidden" name={genreParamName} value={searchParams[genreParamName]} />
      <input type="hidden" name={sortParamName} value={searchParams[sortParamName]} />
      <button className={styles.button}>Search</button>
    </form>
  );
};
