import React, { Component, Fragment } from "react";
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
            <button className="close-search">Close</button>
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
