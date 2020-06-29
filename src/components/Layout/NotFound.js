import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container">
      <h1>Sorry, Page not found</h1>
      <div>
        <Link to="/">
          <div className="row">
            <button className="btn btn-primary">Back to Main Page</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
