'use client';

import Link from 'next/link.js';
import styles from './styles.module.css';
import { SearchForm } from '../../src/Components/SearchForm/SearchForm';
import { Suspense } from 'react';

export default function MovieListPage({ searchParams }) {
  const href = `/new?${searchParams.toString()}`;

  return (
    <Suspense>
      <Link className={styles.headerButton} href={href}>
        Add movie
      </Link>
      <SearchForm />
    </Suspense>
  );
}
