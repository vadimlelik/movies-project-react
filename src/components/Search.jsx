import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  hendleKey = (event)=>{
    if (event.key ==='Enter'){
        this.props.searchMovies(this.state.search)
    }
  }

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
                onClick={()=>this.props.searchMovies(this.state.search)}
                className='btn  btn-search'> Search</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
