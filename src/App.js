import React, { Fragment } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookCollection from "./components/BookComponents/BookCollection";
import { Route } from "react-router-dom";
import SearchComponent from "./components/SearchComponents/SearchComponent";
import { debounce } from "throttle-debounce";

const myShelves = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];

class BooksApp extends React.Component {
  state = {
    bookArray: [],
    searchResults: [],
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
  //https://github.com/niksy/throttle-debounce#readme
  searchLogic = debounce(250, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          this.setState({ searchResults: books });
        } else {
          this.setState({ searchResults: [] });
        }
      });
    } else {
      this.setState({ searchResults: [] });
    }
  });

  render() {
    const { bookArray, searchResults } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchComponent
            bookArray={bookArray}
            searchResults={searchResults}
            searchLogic={this.searchLogic}
            handleShelfChange={this.handleShelfChange}
          />
        ) : (
          <Fragment>
            <BookCollection
              books={bookArray}
              myShelves={myShelves}
              handleShelfChange={this.handleShelfChange}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default BooksApp;
