import React from 'react';
import Rating from './Rating';
function AutoCompleteList({ movies = [] }) {
  if (movies.length === 0) {
    return <></>;
  }

  const renderList = () => {
    return movies.map((movie) => {
      return (
        <div key={movie.title} className="complete-item-box">
          <div className="complete-item-title">
            <h4>{movie.title}</h4>
            <p>{movie.category}</p>
          </div>
          <div className="rating-box">
            <Rating rating={movie.rating} />
          </div>
        </div>
      );
    });
  };

  return <div className="auto-complete-box">{renderList()}</div>;
}

export default AutoCompleteList;
