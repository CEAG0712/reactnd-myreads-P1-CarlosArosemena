import React, { Component, Fragment } from "react";
import CategorizedSelf from "./CategorizedSelf";

export class BookCollection extends Component {
  render() {
    return (
      <Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <CategorizedSelf />
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
