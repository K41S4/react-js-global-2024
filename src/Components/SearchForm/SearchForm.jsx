import { useState } from "react";
import './SearchForm.css';

export const SearchForm = ({ initialSearchQuery, onSearch }) => {
    const [searchValue, setSearchValue] = useState(initialSearchQuery);

    return (
        <form className="searchContainer" onSubmit={() => onSearch(searchValue)}>
            <input 
                type='text' 
                onChange={(e) => setSearchValue(e.target.value)} 
                value={searchValue} 
                className="searchInput" 
            />
            <button className="searchButton">
                Search
            </button>
        </form>
    );
}