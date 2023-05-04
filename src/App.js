import React from 'react';
import './style.css';
import SearchTextField from './SearchTextField';
import AuthoCompleteList from './AutoCompleteList';
import RatingDropDown from './RatingDropDown';
import GenresDropDown from './GenreDropDown';
import { MoviesData } from './movies.data';

export default function App() {
  const [keyword, setKeyword] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [dropdown, setDropDown] = React.useState('');
  const [ratings, setRatings] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    let matchedMovies = [];
    if (keyword.trim().length > 0) {
      matchedMovies = MoviesData.filter((item) => {
        return item.title.toUpperCase().includes(keyword.toUpperCase());
      });
    } else {
      matchedMovies = [];
    }
    matchedMovies = matchedMovies.filter((movie) => {
      if (ratings.length === 0) {
        return true;
      }
      return ratings.includes(Math.round(movie.rating));
    });
    matchedMovies = matchedMovies.filter((movie) => {
      if (genres.length === 0) {
        return true;
      }
      return genres.includes(movie.category);
    });

    setMovies(matchedMovies);
  }, [keyword, ratings, genres]);
  return (
    <div className="container">
      <div className="keyword-container">
        <SearchTextField
          onChange={(e) => setKeyword(e.target.value)}
          defaultValue={keyword}
        />
        <AuthoCompleteList movies={movies} />
      </div>
      <div className="dropdown-container">
        <RatingDropDown
          onChange={setRatings}
          defaultRatings={ratings}
          onDrop={() => {
            if (dropdown === 'rating') {
              setDropDown('');
            } else {
              setDropDown('rating');
            }
          }}
          dropdown={dropdown}
        />
        <GenresDropDown
          onChange={setGenres}
          defaultGenres={genres}
          onDrop={() => {
            if (dropdown === 'genre') {
              setDropDown('');
            } else {
              setDropDown('genre');
            }
          }}
          dropdown={dropdown}
        />
      </div>
    </div>
  );
}
