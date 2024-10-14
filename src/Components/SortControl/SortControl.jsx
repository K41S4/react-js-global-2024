import { sortOptions } from '../../constants';
import styles from './SortControl.module.css';

export const SortControl = ({ selectedOption, onSelect }) => {
  return (
    <div className={styles.container}>
      <span className={styles.selectLabel}>Sort by</span>
      <select className={styles.select} value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
