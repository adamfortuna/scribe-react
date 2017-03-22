import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../common/Review';

class ReviewPage extends React.Component {
  render() {
    // Todo: How do I pass review better?
    const review = this.props.location.review;

    return (
      <div>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Books</Link>
            </li>
            <li className="breadcrumb-item active">{review.book.title}</li>
          </ol>

          <Review review={review} />
        </div>
      </div>
    );
  }
}

export default ReviewPage;
