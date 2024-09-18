import React from "react";
import { buttonStyle, containerStyle, selectedButtonStyle } from "./styles";

export const GenreSelect = ({ allGenres, selectedGenre, onSelect }) => {
    const handler = (e) => {
        onSelect(e.target.name);
    };

    return (
        <div style={containerStyle}>
            {allGenres.map((genre) => (
                <button
                    key={genre}
                    onClick={handler}
                    name={genre}
                    style={genre === selectedGenre ? selectedButtonStyle : buttonStyle}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
} 