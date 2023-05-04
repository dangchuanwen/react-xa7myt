import React from 'react';

function SearchTextField({ defaultValue = '', onChange }) {
  return (
    <div className="search-box">
      <input value={defaultValue} onChange={onChange} />
    </div>
  );
}

export default SearchTextField;
