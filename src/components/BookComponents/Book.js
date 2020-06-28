import React, { Component, Fragment } from "react";
import BookShelfChanger from "./BookShelfChanger";

export class Book extends Component {
  render() {
    const { myShelves, handleShelfChange, book } = this.props;

    const { title, authors, shelf, imageLinks } = this.props.book;

    return (
      <Fragment>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    imageLinks
                      ? imageLinks.smallThumbnail
                      : "icons/book-placeholder.svg"
                  })`,
                }}
              ></div>
              <BookShelfChanger
                book={book}
                shelf={shelf}
                myShelves={myShelves}
                handleShelfChange={handleShelfChange}
              />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
              {authors ? authors.join(", ") : "Unknown Author"}
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

export default Book;
