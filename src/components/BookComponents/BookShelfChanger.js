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
    const { myShelves } = this.props;

    return (
      <Fragment>
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.onChange}>
            <option value="move" disabled>
              Move to...
            </option>
            {myShelves.map((shelf) => (
              <option key={shelf.id} value={shelf.id}>
                {shelf.title}
              </option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
      </Fragment>
    );
  }
}

export default BookShelfChanger;
