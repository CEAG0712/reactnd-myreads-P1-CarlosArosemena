import React, { Component, Fragment } from "react";
import Book from "./Book";

export class CategorizedSelf extends Component {
  render() {
    const { books, shelf, myShelves, handleShelfChange } = this.props;
    const booksPerCategory = books.filter((book) => book.shelf === shelf.id);
    return (
      <Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksPerCategory.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  shelf={shelf}
                  myShelves={myShelves}
                  handleShelfChange={handleShelfChange}
                />
              ))}
            </ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CategorizedSelf;
