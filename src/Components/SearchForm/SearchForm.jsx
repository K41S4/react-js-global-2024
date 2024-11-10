import styles from './SearchForm.module.css';
import { genreParamName, queryParamName, sortParamName } from '../../constants';
import { useRouter } from 'next/router';

export const SearchForm = () => {
  const router = useRouter();

  return (
    <form action={router.asPath.split('?')[0] ?? ''} method="GET" className={styles.container}>
      <input type="text" name={queryParamName} defaultValue={router.query[queryParamName]} className={styles.input} />
      <input type="hidden" name={genreParamName} value={router.query[genreParamName]} />
      <input type="hidden" name={sortParamName} value={router.query[sortParamName]} />
      <button className={styles.button}>Search</button>
    </form>
  );
};
