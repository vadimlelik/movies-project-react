import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  hendleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search,this.state.type,);
    }
  };
  handleFilter = (event) => {
    this.setState(
      ()=> ({ type: event.target.dataset.type }),
      ()=>{this.props.searchMovies(this.state.search,this.state.type,);
    });
    
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.hendleKey}
            />
            <button
              onClick={() => this.props.searchMovies(this.state.search,this.state.type,)}
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
              onChange={this.handleFilter}
              checked={this.state.type ==='all'}
              
            />
            <span>ALL</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type ==='movie'}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type ==='series'}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}
export default Search;
