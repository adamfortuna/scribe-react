import React from 'react';

class Filter extends React.Component {
  // static propTypes = {
  //   activeReviews: React.PropTypes.array.isRequired,
  //   reviews: React.PropTypes.array.isRequired,
  //   page: React.PropTypes.number.isRequired,
  //   totalPages: React.PropTypes.number.isRequired
  // };

  constructor() {
    super();
    this.state = {
      page: 1,
      totalPages: 7
    }
  }

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <p>Page {this.state.page} of {this.state.totalPages}</p>
      </div>
    )
  }
}

export default Filter;
