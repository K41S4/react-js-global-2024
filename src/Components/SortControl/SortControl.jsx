import { sortOptions } from '../../constants';
import styles from './SortControl.module.css';

export const SortControl = ({ selectedOption, onSelect }) => {
  return (
    <div className={styles.container}>
      <span>Sort by</span>
      <select value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
