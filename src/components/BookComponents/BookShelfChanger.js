import React, { Component, Fragment } from "react";

export class BookShelfChanger extends Component {
  state = {
    value: this.props.shelf,
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
    this.props.handleShelfChange(this.props.book, value);
  };
  render() {
    return (
      <Fragment>
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.onChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </Fragment>
    );
  }
}

export default BookShelfChanger;
