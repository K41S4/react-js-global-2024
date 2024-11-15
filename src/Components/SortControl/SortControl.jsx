import { genreParamName, queryParamName, sortOptions, sortParamName } from '../../constants';
import styles from './SortControl.module.css';

export const SortControl = async ({ searchParams }) => {
  return (
    <form action={''} method="GET" className={styles.container}>
      <span className={styles.selectLabel}>Sort by</span>
      <select name={sortParamName} className={styles.select} defaultValue={searchParams[sortParamName]}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="hidden" name={genreParamName} value={searchParams[genreParamName]} />
      <input type="hidden" name={queryParamName} value={searchParams[queryParamName]} />
      <button type="submit">Submit</button>
    </form>
  );
};
