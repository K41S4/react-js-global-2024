import { Suspense } from 'react';
import { SearchForm } from '../../../src/Components/SearchForm/SearchForm';
import { AddMovie } from '../../../src/Containers/AddMovie/AddMovie';

export default function NewMoviePage() {
  return (
    <Suspense>
      <AddMovie />
      <SearchForm />
    </Suspense>
  );
}
