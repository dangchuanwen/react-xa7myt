import React from 'react';
import Rating from './Rating';
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

function RatingDropDown({ onChange, dropdown, onDrop, defaultRatings }) {
  const [rate, setRate] = React.useState([]);
  React.useEffect(() => {
    setRate(defaultRatings);
  }, [defaultRatings]);
  const activate = dropdown === 'rating';
  const renderRating = () => {
    const ratings = [];
    ratings.push(
      <div key={generateUniqueKey()}>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              onChange([null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            } else {
              onChange([]);
            }
          }}
          checked={rate.length === 11}
          type="checkbox"
        />
        <span>Any rating</span>
      </div>
    );

    for (let i = 1; i <= 10; i++) {
      ratings.push(
        <div key={generateUniqueKey()}>
          <input
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...rate, i]);
              } else {
                onChange(rate.filter((item) => item !== i));
              }
            }}
            checked={rate.includes(i)}
            type="checkbox"
          />
          <Rating rating={i} />
        </div>
      );
    }
    return ratings;
  };
  return (
    <div className={'rating-dropdown'}>
      <div onClick={() => onDrop()} className={'dropdown-box'}>
        <p>Rating</p>
        {activate ? <Up /> : <Down />}
      </div>
      {activate && <div className={'dropdown-list'}>{renderRating()}</div>}
    </div>
  );
}

export default RatingDropDown;
