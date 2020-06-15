import React, { Component, Fragment } from "react";
import CategorizedSelf from "./CategorizedSelf";

export class BookCollection extends Component {
  render() {
    const { books, myShelves, handleShelfChange } = this.props;

    return (
      <Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {myShelves.map((shelf) => (
              <CategorizedSelf
                books={books}
                key={shelf.id}
                shelf={shelf}
                myShelves={myShelves}
                handleShelfChange={handleShelfChange}
              />
            ))}
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BookCollection;
