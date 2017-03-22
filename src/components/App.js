import React from 'react';
import Sidebar from './sidebar/Sidebar'

// Temp

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.array.isRequired
  };

  // state = {
  //   reviews: [],
  //   user: {},
  //   shelves: [],
  //   activeReviews: [],
  //   page: 1,
  //   perPage: 25
  // };
  //
  // componentWillMount = () => {
  //   // this.state.reviews = Reviews;
  //   this.setState({ user: UserData });
  //
  //   // Show the shelves with the most books
  //   let sortedShelves = UserData.shelves.sort((a,b) => {
  //     return b.books_count - a.books_count;
  //   });
  //   this.setState({ shelves: sortedShelves });
  //
  //   // The reviews that are currently visible
  //   this.setState({ reviews: Reviews });
  //   this.setActiveReviews(Reviews)
  //   this.setState({ activeReviews: Reviews });
  //
  // }
  //
  // setPage = (e) => {
  //   e.preventDefault();
  //   let page = +e.target.innerHTML;
  //   let startReview = (page-1)*this.state.perPage;
  //   let filteredReviews = this.state.activeReviews.slice(startReview, startReview + this.state.perPage);
  //   this.setState({ filteredReviews, page });
  // }
  //
  // filterReviews = (filters) => {
  //   if(filters.shelf) {
  //     let reviews = this.state.reviews.filter((review) => {
  //       let shelfNames;
  //       if(typeof(review.shelves.shelf.length) === 'number') {
  //         shelfNames = review.shelves.shelf.map((shelf) => shelf.name);
  //       } else {
  //         shelfNames = [review.shelves.shelf.name];
  //
  //       }
  //       return shelfNames.indexOf(filters.shelf) !== -1;
  //     });
  //     this.setActiveReviews(reviews);
  //   }
  // }

  // setActiveReviews = (activeReviews) => {
  //   this.setState({ activeReviews });
  //   this.setState({ activeReviews });
  //   this.setState({ filteredReviews: activeReviews.slice(0,this.state.perPage) });
  //   this.setState({ totalPages: Math.ceil(activeReviews.length / this.state.perPage)});
  // }
  // <h1 className="mb-2">{this.state.user.name} Books</h1>

  // <Nav />
  // <Sidebar />

  render() {
    return (
      <div className="container mt-1">
        <h1 className="mb-2">Adams Books</h1>

        <div className="row">
          <div className="col-md-8">
            {this.props.children}
          </div>

          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
