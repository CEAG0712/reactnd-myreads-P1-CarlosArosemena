import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export class SearchComponent extends Component {
  render() {
    const {
      bookArray,
      searchResults,
      searchLogic,
      handleShelfChange,
    } = this.props;
    return (
      <Fragment>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <SearchForm searchLogic={searchLogic} />
          </div>
          <SearchResults
            searchResults={searchResults}
            bookArray={bookArray}
            handleShelfChange={handleShelfChange}
          />
        </div>
      </Fragment>
    );
  }
}

export default SearchComponent;
