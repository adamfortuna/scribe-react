import React from 'react';

class Shelves extends React.Component {
  static propTypes = {
    shelves: React.PropTypes.array.isRequired
  };

  niceName(slug) {
    return slug.split('-')
               .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
               .join(' ');
  }

  render() {
    return (
      <div>
        <h3 className="mb-3">Shelves</h3>
        <div className="list-group shelves">
          {
            this.props.shelves.map(shelf =>
              <a href='#' className="list-group-item justify-content-between" key={shelf.name}>
                {this.niceName(shelf.name)}
                <span className="badge badge-default badge-pill">{shelf.books_count}</span>
              </a>
            )
          }
        </div>
      </div>
    )
  }
}

export default Shelves;
