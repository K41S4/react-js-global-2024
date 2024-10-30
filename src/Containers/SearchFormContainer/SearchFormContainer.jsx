import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { Outlet } from 'react-router-dom';

export const SearchFormContainer = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  );
};
