import React from 'react';
const Down = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

const Up = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  );
};

const generateUniqueKey = () => {
  return 100 + String(Math.random() * 100000);
};

function GenreDropDown({
  onChange,
  dropdown,
  onDrop,
  defaultGenres = [],
  allGenres = ['Action', 'Comedy', 'Drama', 'Thriller'],
}) {
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    setGenres(defaultGenres);
  }, [defaultGenres]);

  const activate = dropdown === 'genre';

  const renderGenres = () => {
    const genresTags = [];

    genresTags.push(
      <div key={generateUniqueKey()}>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              onChange(['all', ...allGenres]);
            } else {
              onChange([]);
            }
          }}
          checked={genres.length === allGenres.length + 1}
          type="checkbox"
        />
        <span>Any genre</span>
      </div>
    );

    for (let i = 0; i < allGenres.length; i++) {
      genresTags.push(
        <div key={generateUniqueKey()}>
          <input
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...genres, allGenres[i]]);
              } else {
                onChange(genres.filter((item) => item !== allGenres[i]));
              }
            }}
            checked={genres.includes(allGenres[i])}
            type="checkbox"
          />
          <span>{allGenres[i]}</span>
        </div>
      );
    }
    return genresTags;
  };
  return (
    <div className={'rating-dropdown'}>
      <div onClick={() => onDrop()} className={'dropdown-box'}>
        <p>Genre</p>
        {activate ? <Up /> : <Down />}
      </div>
      {activate && <div className={'dropdown-list'}>{renderGenres()}</div>}
    </div>
  );
}

export default GenreDropDown;
