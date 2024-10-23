import { AddMovie } from '../AddMovie/AddMovie';
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

export const SearchFormContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <SearchForm
        initialSearchQuery={searchParams.get('search') ?? ''}
        onSearch={(value) =>
          setSearchParams((params) => {
            params.set('search', value);
            return params;
          })
        }
      />
      <AddMovie />
    </>
  );
};
