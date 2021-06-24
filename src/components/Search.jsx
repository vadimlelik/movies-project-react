import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const hendleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={hendleKey}
          />
          <button
            onClick={() => searchMovies(search, type)}
            className="btn  btn-search"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>ALL</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies Only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series Only</span>
        </label>
      </div>
    </div>
  );
};
export default Search;
