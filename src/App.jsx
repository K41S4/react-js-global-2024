import { MovieListPage } from './Containers/MovieListPage/MovieListPage';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <MovieListPage />
    </div>
  );
}
