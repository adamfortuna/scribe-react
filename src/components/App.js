import React from 'react';

import Review from './Review'
import Shelves from './Shelves'
import Filter from './Filter'
import Nav from './Nav'
import Pagination from './Pagination'

// Temp
import Reviews from '../data/books.json'
import UserData from '../data/2419634.json'

class App extends React.Component {
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
    console.log(filters);
    if(filters.shelf) {
      let reviews = this.state.reviews.filter((review) => {
        let shelfNames;
        if(typeof(review.shelves.shelf.length) === 'number') {
          shelfNames = review.shelves.shelf.map((shelf) => shelf.name);
          console.log('shelfNames', shelfNames);
          console.log('filters.shelf', filters.shelf);
        } else {
          shelfNames = [review.shelves.shelf.name];

        }
        return shelfNames.indexOf(filters.shelf) !== -1;
      });
      console.log('reviews', reviews);
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
      <div className="container mt-1">
        <h1 className="mb-2">{this.state.user.name} Books</h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Books</li>
        </ol>

        <div className="row">
          <div className="col-md-8">
            <Nav />

            <Pagination count={this.state.activeReviews.length} page={this.state.page} perPage={this.state.perPage} setPage={this.setPage} />

            <ul className="list-unstyled reviews">
              { this.state.filteredReviews.map(review => <Review key={review.id} review={review} />) }
            </ul>

            <Pagination count={this.state.activeReviews.length} page={this.state.page} perPage={this.state.perPage} setPage={this.setPage} />
          </div>

          <div className="col-md-3">
            <Filter activeReviews={this.state.activeReviews} reviews={this.state.reviews} page={this.state.page} totalPages={this.state.totalPages} />
            <Shelves shelves={this.state.shelves} filterReviews={this.filterReviews} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
