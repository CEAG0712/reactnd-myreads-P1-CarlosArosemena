import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookCollection from "./components/BookComponents/BookCollection";

const myShelves = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];

class BooksApp extends React.Component {
  state = {
    bookArray: [],
    showSearchPage: false,
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ bookArray: books });
    });
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);

    if (shelf === "none") {
      this.setState((prevState) => ({
        bookArray: prevState.bookArray.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((prevState) => ({
        bookArray: prevState.bookArray
          .filter((b) => b.id !== book.id)
          .concat(book),
      }));
    }
  };

  render() {
    const { bookArray } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <BookCollection
            books={bookArray}
            myShelves={myShelves}
            handleShelfChange={this.handleShelfChange}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
