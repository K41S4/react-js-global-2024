import React, { useState } from "react";
import { buttonStyle, containerStyle, inputStyle } from "./styles";

export const SearchForm = ({ initialSearchQuery, onSearch }) => {
    const [searchValue, setSearchValue] = useState(initialSearchQuery);

    const handleSearch = () => {
        onSearch(searchValue);
    }

    const onEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div style={containerStyle}>
            <input 
                type='text' 
                onChange={(e) => setSearchValue(e.target.value)} 
                value={searchValue} 
                onKeyDown={onEnterKey} 
                style={inputStyle} 
            />
            <button onClick={handleSearch} style={buttonStyle}>
                {'Search'}
            </button>
        </div>
    );
}