import { useRouter } from 'next/router';
import { genreParamName, queryParamName, sortOptions, sortParamName } from '../../constants';
import styles from './SortControl.module.css';

export const SortControl = () => {
  const router = useRouter();

  return (
    <form action={router.asPath.split('?')[0] ?? ''} method="GET" className={styles.container}>
      <span className={styles.selectLabel}>Sort by</span>
      <select name={sortParamName} className={styles.select} defaultValue={router.query.sortBy}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="hidden" name={genreParamName} value={router.query[genreParamName]} />
      <input type="hidden" name={queryParamName} value={router.query[queryParamName]} />
      <button type="submit">Submit</button>
    </form>
  );
};
