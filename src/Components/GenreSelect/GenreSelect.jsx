import './GenreSelect.css';

export const GenreSelect = ({ allGenres, selectedGenre, onSelect }) => {
    return (
        <div className="genreSelectContainer">
            {allGenres.map((genre) => (
                <button
                    key={genre}
                    onClick={() => onSelect(genre)}
                    className={genre === selectedGenre ? "selectedButton" : "button"}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
} 