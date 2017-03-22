import React from 'react';
import { Link } from 'react-router-dom';

class Review extends React.Component {
  static propTypes = {
    review: React.PropTypes.object.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    let review = this.props.review,
        book = review.book;

    return (
      <li className={"card card-block review mb-3 rating-" + review.rating}>
        <div className="col-md-3 review--image">
          <a href={book.link} target="_blank">
            <img src={book.image_url} aria-hidden role="presentation" />
            <img src={"http://images.amazon.com/images/P/"+book.isbn+".01.ZTZZZZZZ.jpg"} aria-hidden role="presentation" />
          </a>
          <p className="review--rating">
            <span className="review--rating-large">{review.rating}</span>
            /
            <span className="review--rate-outof">5</span>
          </p>
        </div>
        <div className="col-md-9">
          <h3>{book.title}</h3>
          <p className="lead">By {book.authors.author.name}</p>
          <p>{review.body}</p>
          <p className="review--meta">
            <Link to={{ pathname: `/reviews/${review.id}`, review}}>
              Started on {review.started_at}. {review.read_at ? `Finished on ${review.read_at}` : 'Currently Reading'}.
            </Link>
          </p>
        </div>
      </li>
    )
  }
}

export default Review;
