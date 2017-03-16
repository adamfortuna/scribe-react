import React from 'react';

class Filter extends React.Component {
  static propTypes = {
    activeReviews: React.PropTypes.array.isRequired,
    reviews: React.PropTypes.array.isRequired,
    page: React.PropTypes.number.isRequired,
    totalPages: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <p>Page {this.props.page} of {this.props.totalPages}</p>

        <div className="form-control">
          <label>Rating</label>
        </div>

        <div className="form-control">
          <label>Rating</label>
        </div>
      </div>
    )
  }
}

export default Filter;
