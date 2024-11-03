import { useSearchParams } from 'react-router-dom';
import { sortOptions, sortParamName } from '../../constants';
import styles from './SortControl.module.css';

export const SortControl = () => {
  const [searchParams, setSearchParams] = useSearchParams({ [sortParamName]: sortOptions[0].value });
  const selectedOption = searchParams.get(sortParamName);

  const handleSelect = (value) => {
    setSearchParams((params) => {
      params.set(sortParamName, value);
      return params;
    });
  };

  return (
    <div className={styles.container}>
      <span className={styles.selectLabel}>Sort by</span>
      <select className={styles.select} value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
