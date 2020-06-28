import React, { Component, Fragment } from "react";

export class SearchForm extends Component {
  state = {
    query: "",
  };

  onSearch = (e) => {
    const formValue = e.target.value;
    this.setState({ query: formValue }, () => {
      this.props.searchLogic(formValue);
    });
  };
  render() {
    const { formValue } = this.state;
    return (
      <Fragment>
        <div className="search-books-input-wrapper">
          {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
          <input
            type="text"
            value={formValue}
            placeholder="Search by title or author"
            onChange={this.onSearch}
          />
        </div>
      </Fragment>
    );
  }
}

export default SearchForm;
