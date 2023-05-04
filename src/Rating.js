import React from 'react';
import { StarFilled, StarHalf, StarOutline } from './Stars';

const generateUniqueKey = () => {
  return 100 + String(Math.random() * 100000);
};

function Rating({ rating = 0 }) {
  let Stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    Stars.push(<StarFilled key={generateUniqueKey()} />);
  }

  let diff = rating - Math.floor(rating);

  if (diff > 0 && diff <= 0.5) {
    Stars.push(<StarHalf key={generateUniqueKey()} />);
  }

  if (diff > 0 && diff > 0.5) {
    Stars.push(<StarFilled key={generateUniqueKey()} />);
  }

  for (let i = 0, len = 10 - Stars.length; i < len; i++) {
    Stars.push(<StarOutline key={generateUniqueKey()} />);
  }

  return <div>{Stars}</div>;
}

export default Rating;
