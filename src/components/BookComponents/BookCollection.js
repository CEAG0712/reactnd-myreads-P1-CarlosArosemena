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
                handleShelfChange={handleShelfChange}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BookCollection;
