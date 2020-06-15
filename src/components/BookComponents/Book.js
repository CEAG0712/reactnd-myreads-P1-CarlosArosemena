import React, { Component, Fragment } from "react";
import BookShelfChanger from "./BookShelfChanger";

export class Book extends Component {
  render() {
    const {
      id,
      title,
      authors,
      imageLinks: { smallThumbnail },
    } = this.props.book;

    console.log(smallThumbnail);

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
                  backgroundImage: `url(${smallThumbnail})`,
                }}
              ></div>
              <BookShelfChanger />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(", ")}</div>
          </div>
        </li>
      </Fragment>
    );
  }
}

export default Book;
