import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Books</Link>
          </li>
          <li className="breadcrumb-item active">Not Found</li>
        </ol>

        <h2>Not Found</h2>
        <p>Ops, looks like you hit a 404.</p>
      </div>
    )
  }
}

export default NotFoundPage;
