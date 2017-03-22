import React from 'react';
import Nav from '../common/Nav';
import Review from '../common/Review';
import Pagination from '../common/Pagination';
import Reviews from '../../data/books.json'
import UserData from '../../data/2419634.json'


class ReviewsPage extends React.Component {
  state = {
    reviews: [],
    user: {},
    shelves: [],
    activeReviews: [],
    page: 1,
    perPage: 25
  };

  componentWillMount = () => {
    // this.state.reviews = Reviews;
    this.setState({ user: UserData });

    // Show the shelves with the most books
    let sortedShelves = UserData.shelves.sort((a,b) => {
      return b.books_count - a.books_count;
    });
    this.setState({ shelves: sortedShelves });

    // The reviews that are currently visible
    this.setState({ reviews: Reviews });
    this.setActiveReviews(Reviews)
    this.setState({ activeReviews: Reviews });
  }

  setPage = (e) => {
    e.preventDefault();
    let page = +e.target.innerHTML;
    let startReview = (page-1)*this.state.perPage;
    let filteredReviews = this.state.activeReviews.slice(startReview, startReview + this.state.perPage);
    this.setState({ filteredReviews, page });
  }

  filterReviews = (filters) => {
    if(filters.shelf) {
      let reviews = this.state.reviews.filter((review) => {
        let shelfNames;
        if(typeof(review.shelves.shelf.length) === 'number') {
          shelfNames = review.shelves.shelf.map((shelf) => shelf.name);
        } else {
          shelfNames = [review.shelves.shelf.name];

        }
        return shelfNames.indexOf(filters.shelf) !== -1;
      });
      this.setActiveReviews(reviews);
    }
  }

  setActiveReviews = (activeReviews) => {
    this.setState({ activeReviews });
    this.setState({ activeReviews });
    this.setState({ filteredReviews: activeReviews.slice(0,this.state.perPage) });
    this.setState({ totalPages: Math.ceil(activeReviews.length / this.state.perPage)});
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Books</li>
        </ol>

        <Nav />

        <Pagination count={this.state.activeReviews.length} page={this.state.page} perPage={this.state.perPage} setPage={this.setPage} />

        <ul className="list-unstyled reviews">
          { this.state.filteredReviews.map(review => <Review key={review.id} review={review} />) }
        </ul>

        <Pagination count={this.state.activeReviews.length} page={this.state.page} perPage={this.state.perPage} setPage={this.setPage} />
      </div>
    );
  }
}

export default ReviewsPage;
