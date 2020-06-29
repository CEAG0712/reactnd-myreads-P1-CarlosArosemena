import React, { Component, Fragment } from "react";
import Book from "../BookComponents/Book";

export class SearchResults extends Component {
  render() {
    const { searchResults, bookArray, handleShelfChange } = this.props;

    const searchResultLogic = searchResults.map((book) => {
      bookArray.map((b) => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });

    return (
      <Fragment>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResultLogic.map((book) => (
              <Book
                key={book.id}
                book={book}
                shelf={book.shelf || "none"}
                handleShelfChange={handleShelfChange}
              />
            ))}
          </ol>
        </div>
      </Fragment>
    );
  }
}

export default SearchResults;
